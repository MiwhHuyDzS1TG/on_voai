import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock3, Flame, Target, TrendingUp } from "lucide-react";
import { lessons, modules } from "../data/curriculum";
import { flashcards } from "../data/review";
import { questionBank } from "../data/questions";
import { useProgress } from "../state/ProgressContext";
import { masteryLabel } from "../utils/mastery";

const moduleScore = (moduleId: string, mastery: Record<string, number>): number => {
  const topics = [...new Set(questionBank.filter((question) => question.module === moduleId).map((question) => question.topic))];
  if (topics.length === 0) return 0;
  return Math.round(topics.reduce((sum, topic) => sum + (mastery[topic] ?? 0), 0) / topics.length);
};

const streak = (days: string[]): number => {
  const set = new Set(days);
  let count = 0;
  const cursor = new Date();
  while (set.has(cursor.toISOString().slice(0, 10))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
};

export function DashboardPage({ navigate }: { navigate: (route: string) => void }) {
  const { progress } = useProgress();
  const scores = modules.map((module) => ({ ...module, score: moduleScore(module.id, progress.mastery) }));
  const overall = Math.round(scores.reduce((sum, item) => sum + item.score, 0) / scores.length);
  const answered = progress.answers.length;
  const correct = progress.answers.filter((answer) => answer.correct).length;
  const due = flashcards.filter((card) => !progress.flashcards[card.id] || new Date(progress.flashcards[card.id].dueAt) <= new Date()).length;
  const topicList = [...new Set(questionBank.map((question) => question.topic))];
  const recommendations = topicList.map((topic) => ({ topic, score: progress.mastery[topic] ?? 20 })).sort((a, b) => a.score - b.score).slice(0, 3);
  const lastMock = progress.mocks[0];
  const calendar = Array.from({ length: 28 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (27 - index));
    const key = date.toISOString().slice(0, 10);
    return { key, active: progress.studyDays.includes(key), label: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }) };
  });

  return (
    <div className="page dashboard-page">
      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">Lộ trình hôm nay</p>
          <h1>Biết mình yếu ở đâu.<br />Ôn đúng phần đó.</h1>
          <p>Mastery được cập nhật từ độ khó, kết quả gần đây và mức tự tin của bạn.</p>
          <button type="button" className="button primary" onClick={() => navigate(`practice?topic=${encodeURIComponent(recommendations[0]?.topic ?? "")}`)}>Luyện điểm yếu <ArrowRight size={17} /></button>
        </div>
        <div className="mastery-orbit" aria-label={`Mastery tổng ${overall}%`}>
          <svg viewBox="0 0 140 140" role="img">
            <circle cx="70" cy="70" r="58" className="orbit-track" />
            <circle cx="70" cy="70" r="58" className="orbit-value" pathLength="100" strokeDasharray={`${overall} 100`} />
          </svg>
          <div><strong>{overall}%</strong><span>{masteryLabel(overall)}</span></div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Tổng quan tiến độ">
        <div><BookOpen /><span>Đã học</span><strong>{progress.lessonCompletion.length}/{lessons.length}</strong></div>
        <div><Target /><span>Câu đã làm</span><strong>{answered}</strong></div>
        <div><TrendingUp /><span>Accuracy</span><strong>{answered ? Math.round(correct / answered * 100) : 0}%</strong></div>
        <div><Flame /><span>Streak</span><strong>{streak(progress.studyDays)} ngày</strong></div>
        <div><Clock3 /><span>Flashcard đến hạn</span><strong>{due}</strong></div>
      </section>

      <div className="dashboard-grid">
        <section className="panel module-progress">
          <div className="section-heading"><div><h2>Mastery theo module</h2><p>Tập trung vào khoảng trống, không học lại phần đã vững.</p></div><button type="button" className="text-button" onClick={() => navigate("learn")}>Knowledge map <ArrowRight size={15} /></button></div>
          <div className="module-bars">
            {scores.map((module) => (
              <button type="button" key={module.id} onClick={() => navigate(`learn?module=${module.id}`)}>
                <span className="module-index">0{module.index}</span>
                <span className="module-info"><strong>{module.shortTitle}</strong><small>{masteryLabel(module.score)}</small></span>
                <span className="bar-track"><span style={{ width: `${module.score}%` }} /></span>
                <b>{module.score}%</b>
              </button>
            ))}
          </div>
        </section>

        <section className="panel recommendations">
          <div className="section-heading"><div><h2>Nên học tiếp</h2><p>Ba chủ đề có mastery thấp nhất.</p></div></div>
          <ol>
            {recommendations.map((item, index) => (
              <li key={item.topic}>
                <span>{index + 1}</span>
                <div><strong>{item.topic}</strong><small>{masteryLabel(item.score)}</small></div>
                <b>{item.score}%</b>
              </li>
            ))}
          </ol>
          <button type="button" className="button secondary full" onClick={() => navigate("practice")}>Tạo phiên 15 phút</button>
        </section>

        <section className="panel study-calendar">
          <div className="section-heading"><div><h2>Nhịp học 4 tuần</h2><p>Mỗi ô là một ngày có hoạt động học.</p></div><CalendarDays /></div>
          <div className="heatmap">{calendar.map((day) => <span key={day.key} className={day.active ? "active" : ""} title={day.label} aria-label={`${day.label}: ${day.active ? "đã học" : "chưa học"}`} />)}</div>
          <div className="heatmap-caption"><span>28 ngày trước</span><span>Hôm nay</span></div>
        </section>

        <section className="panel mock-summary">
          <div className="section-heading"><div><h2>Thi thử gần nhất</h2><p>Preset là bài tự cấu hình, không phải format chính thức.</p></div></div>
          {lastMock ? (
            <div className="mock-score"><strong>{lastMock.score}/{lastMock.total}</strong><span>{Math.round(lastMock.score / lastMock.total * 100)}% chính xác</span><small>{new Date(lastMock.completedAt).toLocaleDateString("vi-VN")}</small></div>
          ) : (
            <div className="empty-state compact"><ClipboardIcon /><p>Bạn chưa có kết quả thi thử.</p></div>
          )}
          <button type="button" className="button secondary full" onClick={() => navigate("exam")}>{lastMock ? "Xem và thi lại" : "Tạo bài thi thử"}</button>
        </section>
      </div>

      <section className="focus-session">
        <div className="focus-icon"><CheckCircle2 /></div>
        <div><span>Focus session đề xuất</span><h2>{recommendations[0]?.topic ?? "Data Leakage"}, 15 phút</h2><p>2 phút recall, 4 phút review, 5 câu practice, 2 scenario, rồi tự đánh giá confidence.</p></div>
        <button type="button" className="button primary" onClick={() => navigate(`practice?topic=${encodeURIComponent(recommendations[0]?.topic ?? "")}`)}>Bắt đầu <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}

function ClipboardIcon() {
  return <Target size={28} />;
}
