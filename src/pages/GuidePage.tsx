import { ArrowRight, Beaker, BookOpen, CheckCircle2, Cloud, Laptop, NotebookPen, ScanSearch, Smartphone, Target } from "lucide-react";

const steps = [
  { icon: ScanSearch, title: "1. Xác định điểm xuất phát", text: "Làm bài chẩn đoán 24 câu nếu muốn hệ thống tìm điểm yếu, hoặc chọn học từ đầu để đi theo toàn bộ lộ trình." },
  { icon: BookOpen, title: "2. Học một concept", text: "Đọc mục trực giác trước, sau đó mới tới định nghĩa, công thức và ví dụ. Kết thúc bằng Quick Check." },
  { icon: Target, title: "3. Luyện có chủ đích", text: "Chọn module, độ khó và số câu. Hãy đặt confidence thật, vì mastery dùng cả độ khó lẫn mức tự tin." },
  { icon: NotebookPen, title: "4. Sửa lỗi có hệ thống", text: "Mọi câu sai được đưa vào Sổ câu sai. Ôn lại misconception thay vì chỉ ghi nhớ đáp án." },
  { icon: Beaker, title: "5. Chạm vào mô hình", text: "Dùng Interactive Labs để kéo threshold, đổi dữ liệu hoặc chạy từng bước và quan sát kết quả thay đổi." },
  { icon: CheckCircle2, title: "6. Thi thử đúng lúc", text: "Thi thử khi đã ôn điểm yếu. Trong lúc thi không có hint hay lời giải; phân tích chỉ xuất hiện sau khi nộp." },
];

export function GuidePage({ navigate }: { navigate: (route: string) => void }) {
  return <div className="page guide-page">
    <header className="page-header guide-hero">
      <div><p className="eyebrow">Hướng dẫn sử dụng</p><h1>Học theo vòng lặp, không học theo cảm giác.</h1><p>Mỗi buổi chỉ cần đi qua bốn nhịp: hiểu concept, tự trả lời, xem lỗi và ôn lại đúng lúc.</p></div>
      <button type="button" className="button primary" onClick={() => navigate("learn")}>Bắt đầu học <ArrowRight size={17} /></button>
    </header>

    <section className="guide-flow" aria-label="Quy trình học">
      <span>Học</span><ArrowRight /><span>Quick Check</span><ArrowRight /><span>Luyện tập</span><ArrowRight /><span>Câu sai</span><ArrowRight /><span>Ôn nhanh</span>
    </section>

    <section className="guide-steps">
      {steps.map(({ icon: Icon, title, text }) => <article className="panel" key={title}><Icon /><div><h2>{title}</h2><p>{text}</p></div></article>)}
    </section>

    <section className="panel device-guide">
      <div className="device-visual" aria-hidden="true"><Laptop /><Cloud /><Smartphone /></div>
      <div><p className="eyebrow">Học trên hai thiết bị</p><h2>Đăng nhập cùng một tài khoản trên máy tính và điện thoại.</h2><ol><li>Mở trang <strong>Tài khoản & đồng bộ</strong> trên máy tính và đăng nhập.</li><li>Chờ trạng thái <strong>Đã đồng bộ</strong> rồi mới đóng trang.</li><li>Mở website đã deploy trên điện thoại, đăng nhập cùng tài khoản.</li><li>Thiết bị mới tự tải tiến độ cloud; sau đó thay đổi được tự lưu.</li></ol><p className="guide-note">Nếu học đồng thời trên hai thiết bị, bấm “Tải từ cloud” trước khi bắt đầu và “Lưu lên cloud” khi kết thúc.</p></div>
      <button type="button" className="button secondary" onClick={() => navigate("account")}>Mở tài khoản <ArrowRight size={17} /></button>
    </section>

    <section className="guide-tips">
      <article><strong>20-30 phút</strong><span>Một phiên học tập trung là đủ.</span></article>
      <article><strong>Không nhìn đáp án sớm</strong><span>Dùng hint từng bước khi luyện, không dùng trong thi.</span></article>
      <article><strong>Mastery là gợi ý</strong><span>Dùng để chọn ưu tiên, không xem là điểm thi chính thức.</span></article>
    </section>
  </div>;
}
