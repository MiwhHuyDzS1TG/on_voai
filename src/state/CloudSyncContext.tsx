import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { ProgressData } from "../types";
import { useProgress } from "./ProgressContext";

type SyncStatus = "checking" | "signed-out" | "syncing" | "synced" | "offline" | "error";
type CloudRecord = { data: ProgressData; updatedAt: string };

type CloudSyncContextValue = {
  user: string | null;
  status: SyncStatus;
  message: string;
  lastSyncedAt: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  pushToCloud: () => Promise<void>;
  pullFromCloud: () => Promise<void>;
};

const CloudSyncContext = createContext<CloudSyncContextValue | null>(null);

const errorMessage = (code: string) => {
  if (code === "INVALID_CREDENTIALS") return "Tên đăng nhập hoặc mật khẩu chưa đúng.";
  if (code === "TOO_MANY_ATTEMPTS") return "Đăng nhập quá nhiều lần. Hãy thử lại sau 10 phút.";
  if (code === "REDIS_NOT_CONFIGURED" || code.includes("MISSING")) return "Cloud chưa được kết nối Redis trên Vercel.";
  return "Không thể kết nối cloud. Tiến độ cục bộ vẫn được giữ an toàn.";
};

const readJson = async <T,>(response: Response): Promise<T> => {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) throw new Error("API_NOT_AVAILABLE");
  const body = await response.json() as T & { error?: string };
  if (!response.ok) throw new Error(body.error || "REQUEST_FAILED");
  return body;
};

export function CloudSyncProvider({ children }: { children: ReactNode }) {
  const { progress, replaceProgress } = useProgress();
  const [user, setUser] = useState<string | null>(null);
  const [status, setStatus] = useState<SyncStatus>("checking");
  const [message, setMessage] = useState("Đang kiểm tra phiên đăng nhập...");
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const skipNextUpload = useRef(false);

  const upload = useCallback(async (data: ProgressData) => {
    setStatus("syncing");
    setMessage("Đang lưu tiến độ lên cloud...");
    const response = await fetch("/api/sync", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const result = await readJson<{ record: CloudRecord }>(response);
    setLastSyncedAt(result.record.updatedAt);
    setStatus("synced");
    setMessage("Đã đồng bộ với cloud.");
  }, []);

  const hydrate = useCallback(async () => {
    setStatus("syncing");
    setMessage("Đang lấy tiến độ mới nhất...");
    const response = await fetch("/api/sync", { credentials: "include", cache: "no-store" });
    const result = await readJson<{ record: CloudRecord | null }>(response);
    skipNextUpload.current = true;
    if (result.record) {
      replaceProgress(result.record.data);
      setLastSyncedAt(result.record.updatedAt);
      setStatus("synced");
      setMessage("Đã tải tiến độ từ cloud.");
    } else {
      await upload(progress);
    }
    setReady(true);
  }, [progress, replaceProgress, upload]);

  useEffect(() => {
    let active = true;
    const restoreSession = async () => {
      try {
        const response = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
        const result = await readJson<{ user: { username: string } }>(response);
        if (!active) return;
        setUser(result.user.username);
        await hydrate();
      } catch (error) {
        if (!active) return;
        const code = error instanceof Error ? error.message : "REQUEST_FAILED";
        setStatus(code === "API_NOT_AVAILABLE" ? "offline" : "signed-out");
        setMessage(code === "API_NOT_AVAILABLE" ? "Cloud sync sẽ hoạt động sau khi deploy lên Vercel." : "Chưa đăng nhập cloud.");
      }
    };
    void restoreSession();
    return () => { active = false; };
  }, []); // Chỉ khôi phục phiên một lần khi ứng dụng khởi động.

  useEffect(() => {
    if (!user || !ready) return;
    if (skipNextUpload.current) {
      skipNextUpload.current = false;
      return;
    }
    const timer = window.setTimeout(() => {
      void upload(progress).catch((error) => {
        setStatus("error");
        setMessage(errorMessage(error instanceof Error ? error.message : "SYNC_FAILED"));
      });
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [progress, ready, upload, user]);

  const login = useCallback(async (username: string, password: string) => {
    setStatus("syncing");
    setMessage("Đang đăng nhập...");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await readJson<{ user: { username: string } }>(response);
      setUser(result.user.username);
      setReady(false);
      await hydrate();
      return true;
    } catch (error) {
      const code = error instanceof Error ? error.message : "LOGIN_FAILED";
      setStatus(code === "API_NOT_AVAILABLE" ? "offline" : "error");
      setMessage(code === "API_NOT_AVAILABLE" ? "Đăng nhập cloud chỉ hoạt động trên bản deploy Vercel." : errorMessage(code));
      return false;
    }
  }, [hydrate]);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } finally {
      setUser(null);
      setReady(false);
      setStatus("signed-out");
      setMessage("Đã đăng xuất. Tiến độ trên máy vẫn được giữ lại.");
    }
  }, []);

  const pushToCloud = useCallback(async () => {
    try {
      await upload(progress);
    } catch (error) {
      setStatus("error");
      setMessage(errorMessage(error instanceof Error ? error.message : "SYNC_FAILED"));
    }
  }, [progress, upload]);

  const pullFromCloud = useCallback(async () => {
    try {
      await hydrate();
    } catch (error) {
      setStatus("error");
      setMessage(errorMessage(error instanceof Error ? error.message : "SYNC_FAILED"));
    }
  }, [hydrate]);

  const value = useMemo(() => ({ user, status, message, lastSyncedAt, login, logout, pushToCloud, pullFromCloud }), [user, status, message, lastSyncedAt, login, logout, pushToCloud, pullFromCloud]);
  return <CloudSyncContext.Provider value={value}>{children}</CloudSyncContext.Provider>;
}

export const useCloudSync = () => {
  const context = useContext(CloudSyncContext);
  if (!context) throw new Error("useCloudSync must be used inside CloudSyncProvider");
  return context;
};
