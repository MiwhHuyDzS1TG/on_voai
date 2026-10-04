import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { BarChart3, Beaker, BookOpen, BrainCircuit, Calculator, CircleHelp, ClipboardCheck, Cloud, FileWarning, LayoutDashboard, Menu, Moon, NotebookPen, Search, Settings2, Sun, Target, UserRound, X } from "lucide-react";
import { useProgress } from "../state/ProgressContext";
import { useCloudSync } from "../state/CloudSyncContext";
import { SearchDialog } from "./SearchDialog";

export type RouteName = "dashboard" | "learn" | "review" | "practice" | "exam" | "mistakes" | "formulas" | "labs" | "traps" | "plan" | "guide" | "account" | "sources";

const navItems: Array<{ route: RouteName; label: string; icon: typeof LayoutDashboard }> = [
  { route: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { route: "learn", label: "Học", icon: BookOpen },
  { route: "review", label: "Ôn nhanh", icon: BrainCircuit },
  { route: "practice", label: "Luyện tập", icon: Target },
  { route: "exam", label: "Thi thử", icon: ClipboardCheck },
  { route: "mistakes", label: "Câu sai", icon: NotebookPen },
  { route: "formulas", label: "Công thức", icon: Calculator },
  { route: "labs", label: "Interactive Labs", icon: Beaker },
  { route: "traps", label: "Bẫy VAIO", icon: FileWarning },
  { route: "plan", label: "Kế hoạch", icon: BarChart3 },
];

export function Shell({ children, route, navigate }: { children: ReactNode; route: RouteName; navigate: (route: string) => void }) {
  const { progress, toggleTheme } = useProgress();
  const { user, status } = useCloudSync();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const activeItem = navItems.find((item) => item.route === route);
  const routeLabel = activeItem?.label ?? ({ guide: "Hướng dẫn", account: "Tài khoản", sources: "Nguồn & dữ liệu" } as Partial<Record<RouteName, string>>)[route] ?? "VAIO Study Lab";

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-mark"><BrainCircuit size={22} /></div>
          <div><strong>VAIO Study Lab</strong><span>Active learning system</span></div>
          <button type="button" className="icon-button sidebar-close" onClick={() => setMenuOpen(false)} aria-label="Đóng menu"><X /></button>
        </div>
        <nav className="sidebar-nav" aria-label="Điều hướng chính">
          {navItems.map(({ route: itemRoute, label, icon: Icon }) => (
            <button type="button" className={route === itemRoute ? "active" : ""} onClick={() => { navigate(itemRoute); setMenuOpen(false); }} key={itemRoute}>
              <Icon size={19} /><span>{label}</span>
              {itemRoute === "mistakes" && progress.mistakes.length > 0 ? <em>{progress.mistakes.length}</em> : null}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button type="button" className={route === "guide" ? "active" : ""} onClick={() => { navigate("guide"); setMenuOpen(false); }}><CircleHelp size={18} />Hướng dẫn sử dụng</button>
          <button type="button" className={route === "account" ? "active" : ""} onClick={() => { navigate("account"); setMenuOpen(false); }}><UserRound size={18} />{user ?? "Tài khoản & đồng bộ"}<i className={`sync-dot ${status}`} aria-label={status === "synced" ? "Đã đồng bộ" : "Chưa đồng bộ"}>{status === "synced" ? <Cloud size={13} /> : null}</i></button>
          <button type="button" className={route === "sources" ? "active" : ""} onClick={() => { navigate("sources"); setMenuOpen(false); }}><Settings2 size={18} />Nguồn & dữ liệu</button>
          <div className="source-note">VAIO là phạm vi chính<br />IAIO chỉ Ch.3-5</div>
        </div>
      </aside>

      <div className="content-column">
        <header className="topbar">
          <button type="button" className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Mở menu"><Menu /></button>
          <div className="topbar-title"><span>{routeLabel}</span></div>
          <button type="button" className="search-trigger" onClick={() => setSearchOpen(true)}><Search size={18} /><span>Tìm kiếm</span><kbd>Ctrl K</kbd></button>
          <button type="button" className="icon-button theme-button" onClick={toggleTheme} aria-label="Đổi giao diện">{progress.theme === "light" ? <Moon size={19} /> : <Sun size={19} />}</button>
        </header>
        <main className="main-content">{children}</main>
      </div>

      <nav className="mobile-nav" aria-label="Điều hướng di động">
        {navItems.slice(0, 5).map(({ route: itemRoute, label, icon: Icon }) => (
          <button type="button" className={route === itemRoute ? "active" : ""} onClick={() => navigate(itemRoute)} key={itemRoute}><Icon size={20} /><span>{label}</span></button>
        ))}
      </nav>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={navigate} />
      {menuOpen && <button className="sidebar-scrim" aria-label="Đóng menu" onClick={() => setMenuOpen(false)} />}
    </div>
  );
}
