import { ArrowRight, BrainCircuit, CheckCircle2, Gauge } from "lucide-react";

export function Onboarding({ onStart, onDiagnostic }: { onStart: () => void; onDiagnostic: () => void }) {
  return (
    <div className="onboarding-backdrop">
      <section className="onboarding" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
        <div className="brand-mark large"><BrainCircuit size={28} /></div>
        <p className="eyebrow">VAIO Study Lab</p>
        <h1 id="welcome-title">Học để hiểu. Luyện để nhận ra bẫy.</h1>
        <p className="onboarding-copy">Một vòng lặp học chủ động cho toàn bộ đề cương sơ khảo VAIO 2026, có mastery, câu sai và lịch ôn.</p>
        <div className="onboarding-options">
          <button type="button" className="onboarding-option" onClick={onStart}>
            <span className="option-icon"><CheckCircle2 /></span>
            <span><strong>Bắt đầu từ đầu</strong><small>Đi theo knowledge map từ nền tảng</small></span>
            <ArrowRight />
          </button>
          <button type="button" className="onboarding-option recommended" onClick={onDiagnostic}>
            <span className="option-icon"><Gauge /></span>
            <span><strong>Kiểm tra trình độ</strong><small>24 câu phủ đều 5 module, không phải điểm thi thật</small></span>
            <ArrowRight />
          </button>
        </div>
        <p className="onboarding-note">Tiến độ được lưu riêng trong trình duyệt này. Không cần tài khoản.</p>
      </section>
    </div>
  );
}
