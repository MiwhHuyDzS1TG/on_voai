import { useRef, useState } from "react";
import { Database, Download, FileText, Moon, RotateCcw, ShieldCheck, Sun, Upload } from "lucide-react";
import { useProgress } from "../state/ProgressContext";

export function SourcesPage() {
  const { progress, toggleTheme, exportProgress, importProgress, resetProgress } = useProgress();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const importFile = async (file?: File) => {
    if (!file) return;
    try {
      await importProgress(file);
      setMessage("Đã nhập tiến độ thành công.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Không thể nhập tệp.");
    }
  };

  const reset = () => {
    if (window.confirm("Xóa toàn bộ tiến độ học trên trình duyệt này? Hành động không thể hoàn tác nếu chưa export.")) {
      resetProgress();
      setMessage("Đã đặt lại tiến độ.");
    }
  };

  return <div className="page sources-page">
    <header className="page-header"><div><p className="eyebrow">Nguồn & dữ liệu</p><h1>Minh bạch về phạm vi và tiến độ.</h1><p>VAIO là đề cương chính. IAIO chỉ được dùng để diễn giải sâu Chương 3-5.</p></div></header>
    <div className="sources-grid">
      <section className="panel"><FileText /><h2>Nội dung ôn tập VAIO 2026</h2><p>Phạm vi chính thức cho toàn bộ 5 module, từ nền tảng ML tới framework giải bài toán AI thực tế.</p><span>Nguồn chính</span></section>
      <section className="panel"><FileText /><h2>Eljakim Schrijvers, IAIO Training, 2026</h2><p>Chỉ Chương 3, 4 và 5 được dùng. Nội dung được diễn giải và ghi công theo giấy phép Creative Commons Ghi công - Phi thương mại 4.0 (CC BY-NC 4.0) nêu trong tài liệu nguồn.</p><span>Nguồn bổ trợ · CC BY-NC 4.0</span></section>
      <section className="panel"><ShieldCheck /><h2>Quy tắc toàn vẹn nguồn</h2><p>Mở rộng ngoài VAIO được gắn nhãn. Preset thi thử không được mô tả là format thi chính thức. Tỷ lệ split là ví dụ, không phải luật.</p><span>Source integrity</span></section>
    </div>
    <section className="settings-panel panel">
      <div className="section-heading"><div><h2>Cài đặt và dữ liệu cục bộ</h2><p>Refresh không làm mất tiến độ. Dữ liệu chỉ nằm trong localStorage của trình duyệt.</p></div><Database /></div>
      <div className="setting-row"><div><strong>Giao diện</strong><span>Đổi toàn bộ ứng dụng giữa light và dark.</span></div><button type="button" className="button secondary" onClick={toggleTheme}>{progress.theme === "light" ? <Moon size={17} /> : <Sun size={17} />}{progress.theme === "light" ? "Dùng Dark mode" : "Dùng Light mode"}</button></div>
      <div className="setting-row"><div><strong>Sao lưu tiến độ</strong><span>Export hoặc import toàn bộ mastery, câu sai, flashcard, mock và kế hoạch.</span></div><div className="button-group"><button type="button" className="button secondary" onClick={exportProgress}><Download size={17} />Export JSON</button><button type="button" className="button secondary" onClick={() => fileRef.current?.click()}><Upload size={17} />Import JSON</button><input ref={fileRef} hidden type="file" accept="application/json" onChange={(event) => importFile(event.target.files?.[0])} /></div></div>
      <div className="setting-row danger"><div><strong>Reset progress</strong><span>Xóa tiến độ học, câu sai và lịch ôn trên thiết bị này.</span></div><button type="button" className="button danger" onClick={reset}><RotateCcw size={17} />Reset</button></div>
      {message && <p className="inline-message" role="status">{message}</p>}
    </section>
  </div>;
}
