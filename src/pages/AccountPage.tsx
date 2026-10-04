import { useState, type FormEvent } from "react";
import { CheckCircle2, Cloud, CloudDownload, CloudUpload, KeyRound, LogIn, LogOut, ShieldCheck, UserRound } from "lucide-react";
import { useCloudSync } from "../state/CloudSyncContext";

const formatSyncTime = (value: string | null) => value ? new Intl.DateTimeFormat("vi-VN", { dateStyle: "short", timeStyle: "medium" }).format(new Date(value)) : "Chưa có lần đồng bộ";

export function AccountPage() {
  const { user, status, message, lastSyncedAt, login, logout, pushToCloud, pullFromCloud } = useCloudSync();
  const [username, setUsername] = useState("mh");
  const [password, setPassword] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const success = await login(username.trim(), password);
    if (success) setPassword("");
  };

  return <div className="page account-page">
    <header className="page-header"><div><p className="eyebrow">Tài khoản & đồng bộ</p><h1>Một tiến độ, trên mọi thiết bị.</h1><p>Local-first giúp bạn vẫn học được khi mạng chập chờn; cloud tiếp tục đồng bộ khi kết nối trở lại.</p></div><div className={`cloud-status ${status}`}><Cloud size={20} /><span><strong>{status === "synced" ? "Đã đồng bộ" : status === "syncing" ? "Đang đồng bộ" : user ? "Cần kiểm tra" : "Chưa đăng nhập"}</strong><small>{message}</small></span></div></header>

    {!user ? <section className="account-grid">
      <form className="panel login-card" onSubmit={submit}>
        <div className="account-icon"><UserRound /></div><h2>Đăng nhập VAIO Study Lab</h2><p>Dùng tài khoản cá nhân để lấy lại tiến độ trên điện thoại hoặc máy tính khác.</p>
        <label className="field"><span>Tên đăng nhập</span><div className="input-with-icon"><UserRound size={17} /><input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required /></div></label>
        <label className="field"><span>Mật khẩu</span><div className="input-with-icon"><KeyRound size={17} /><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></div></label>
        <button type="submit" className="button primary full" disabled={status === "syncing"}><LogIn size={17} />{status === "syncing" ? "Đang kết nối..." : "Đăng nhập"}</button>
        <p className="login-message" role="status">{message}</p>
      </form>
      <aside className="panel account-explainer"><ShieldCheck /><h2>Dữ liệu nào được đồng bộ?</h2><ul><li>Bài đã học và điểm mastery.</li><li>Lịch sử trả lời và Sổ câu sai.</li><li>Lịch flashcard, kết quả thi thử.</li><li>Kế hoạch học cá nhân.</li></ul><p>Mật khẩu được kiểm tra trong Vercel Function. Trình duyệt chỉ nhận cookie phiên `HttpOnly` và không lưu mật khẩu.</p></aside>
    </section> : <section className="account-grid signed-in">
      <article className="panel profile-card"><div className="profile-avatar">{user.slice(0, 2).toUpperCase()}</div><div><span>Đang đăng nhập</span><h2>{user}</h2><p><CheckCircle2 size={16} /> Phiên đăng nhập được bảo vệ bằng cookie HttpOnly.</p></div><button type="button" className="button secondary" onClick={() => void logout()}><LogOut size={17} />Đăng xuất</button></article>
      <article className="panel sync-card"><div><span>Lần đồng bộ gần nhất</span><strong>{formatSyncTime(lastSyncedAt)}</strong><p>{message}</p></div><div className="sync-actions"><button type="button" className="button secondary" onClick={() => void pullFromCloud()} disabled={status === "syncing"}><CloudDownload size={17} />Tải từ cloud</button><button type="button" className="button primary" onClick={() => void pushToCloud()} disabled={status === "syncing"}><CloudUpload size={17} />Lưu lên cloud</button></div></article>
      <aside className="panel sync-rule"><ShieldCheck /><div><h2>Quy tắc đồng bộ</h2><p>Thiết bị mới tải bản cloud khi đăng nhập. Sau đó, mỗi thay đổi được tự lưu sau khoảng một giây. Nút thủ công hữu ích khi bạn vừa đổi thiết bị.</p></div></aside>
    </section>}
  </div>;
}
