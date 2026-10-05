import { AlertCircle, ArrowRight, BookOpen, CalendarClock } from "lucide-react";
import { useProgress } from "../state/ProgressContext";
import { answerToText } from "../utils/question";

export function MistakesPage({ navigate }: { navigate: (route: string) => void }) {
  const { progress } = useProgress();
  const due = progress.mistakes.filter((item) => new Date(item.nextReviewAt) <= new Date()).length;
  return <div className="page mistakes-page">
    <header className="page-header"><div><p className="eyebrow">Mistake Notebook</p><h1>Sai một lần, biến thành dữ liệu học.</h1><p>Mỗi lỗi được gắn misconception, đếm số lần lặp lại và lên lịch ôn.</p></div><button type="button" className="button primary" disabled={progress.mistakes.length === 0} onClick={() => navigate("practice?mistakes=1")}>Luyện lại tất cả điểm yếu <ArrowRight size={17} /></button></header>
    <div className="notebook-summary"><div><AlertCircle /><span><strong>{progress.mistakes.length}</strong> câu đang lưu</span></div><div><CalendarClock /><span><strong>{due}</strong> câu đến hạn</span></div><div><BookOpen /><span><strong>{new Set(progress.mistakes.flatMap((item) => item.misconceptionTags)).size}</strong> misconception</span></div></div>
    {progress.mistakes.length === 0 ? <div className="empty-state large"><BookOpen /><h2>Sổ câu sai đang trống</h2><p>Làm diagnostic hoặc practice. Câu sai sẽ tự xuất hiện ở đây.</p><button type="button" className="button secondary" onClick={() => navigate("practice")}>Bắt đầu luyện tập</button></div> : <div className="mistake-list">{progress.mistakes.map((item) => <article key={item.questionId}>
      <header><span>{item.topic}</span><strong>Sai {item.count} lần</strong></header>
      <h2>{item.prompt}</h2>
      <div className="answer-compare"><p><span>Bạn chọn</span><strong>{answerToText(item.selected)}</strong></p><p><span>Đáp án đúng</span><strong>{answerToText(item.correct)}</strong></p></div>
      <p className="mistake-explanation">{item.explanation}</p>
      <div className="mistake-actions"><button type="button" className="button secondary" onClick={() => navigate(`learn${item.lessonId ? `?lesson=${item.lessonId}` : ""}`)}>Học lại kiến thức liên quan</button><button type="button" className="button ghost" onClick={() => navigate(`practice?topic=${encodeURIComponent(item.topic)}&mistakes=1`)}>Luyện lỗi này</button></div>
      <footer><div>{item.misconceptionTags.map((tag) => <code key={tag}>{tag}</code>)}</div><span>Ôn: {new Date(item.nextReviewAt).toLocaleString("vi-VN")}</span></footer>
    </article>)}</div>}
  </div>;
}
