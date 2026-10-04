import { useMemo, useState } from "react";
import { ArrowRight, Beaker, BookOpenCheck, Brain, Check, CircleHelp, RotateCcw, TriangleAlert } from "lucide-react";
import { lessonById, lessons, modules } from "../data/curriculum";
import { questionBank } from "../data/questions";
import { useProgress } from "../state/ProgressContext";
import { MathBlock } from "../components/MathBlock";
import { QuestionCard } from "../components/QuestionCard";
import { SourceBadges } from "../components/SourceBadges";

export function LearnPage({ initialLesson, initialModule, navigate }: { initialLesson?: string; initialModule?: string; navigate: (route: string) => void }) {
  const firstLesson = initialLesson && lessonById[initialLesson] ? initialLesson : modules.find((item) => item.id === initialModule)?.lessonIds[0] ?? lessons[0].id;
  const [selectedId, setSelectedId] = useState(firstLesson);
  const [revealedRecall, setRevealedRecall] = useState<number[]>([]);
  const { progress, completeLesson, recordAnswer } = useProgress();
  const lesson = lessonById[selectedId];
  const quickChecks = useMemo(() => questionBank.filter((question) => question.module === lesson.moduleId).slice(0, 2), [lesson.moduleId]);

  return (
    <div className="page learn-layout">
      <aside className="knowledge-nav">
        <div className="knowledge-heading"><span>Knowledge map</span><strong>{progress.lessonCompletion.length}/{lessons.length} bài</strong></div>
        {modules.map((module) => (
          <details key={module.id} open={module.lessonIds.includes(selectedId)}>
            <summary><span>0{module.index}</span>{module.shortTitle}</summary>
            <div>{module.lessonIds.map((id) => <button type="button" className={selectedId === id ? "active" : ""} onClick={() => { setSelectedId(id); setRevealedRecall([]); }} key={id}>{progress.lessonCompletion.includes(id) ? <Check size={15} /> : <span className="lesson-dot" />}{lessonById[id].title}</button>)}</div>
          </details>
        ))}
      </aside>

      <article className="lesson-content">
        <header className="lesson-hero">
          <div><SourceBadges sources={lesson.sources} />{lesson.extension && <span className="extension-badge">Mở rộng IAIO</span>}</div>
          <h1>{lesson.title}</h1>
          <p>{lesson.summary}</p>
        </header>

        <section className="lesson-section objectives">
          <div className="section-icon"><BookOpenCheck /></div>
          <div><h2>Bạn cần biết gì?</h2><ul>{lesson.objectives.map((objective) => <li key={objective}><Check size={17} />{objective}</li>)}</ul></div>
        </section>

        <div className="lesson-two-col">
          <section className="lesson-card tinted"><Brain /><h2>Trực giác</h2><p>{lesson.intuition}</p></section>
          <section className="lesson-card"><CircleHelp /><h2>Định nghĩa</h2><p>{lesson.definition}</p></section>
        </div>

        {lesson.formula && <section className="formula-feature"><div><span>Công thức cốt lõi</span><MathBlock latex={lesson.formula} /></div><button type="button" className="button ghost" onClick={() => navigate("formulas")}>Mở Formula Sheet <ArrowRight size={16} /></button></section>}

        <div className="example-grid">
          <section><span>Ví dụ cực đơn giản</span><p>{lesson.simpleExample}</p></section>
          <section><span>Ví dụ kiểu VAIO</span><p>{lesson.vaioExample}</p></section>
        </div>

        <section className="distinction-section">
          <h2>Dễ nhầm với gì?</h2>
          <div className="distinction-grid">{lesson.distinctions.map((item) => <div key={`${item.left}-${item.right}`}><div><strong>{item.left}</strong><span>vs</span><strong>{item.right}</strong></div><p>{item.note}</p></div>)}</div>
        </section>

        <section className="trap-callout"><TriangleAlert /><div><h2>Bẫy thường gặp</h2><ul>{lesson.traps.map((trap) => <li key={trap}>{trap}</li>)}</ul></div></section>

        <section className="active-recall">
          <div className="section-heading"><div><h2>Active Recall</h2><p>Tự trả lời thành tiếng trước khi lật gợi ý.</p></div><RotateCcw /></div>
          <div className="recall-grid">{lesson.recall.map((item, index) => <button type="button" className={revealedRecall.includes(index) ? "revealed" : ""} onClick={() => setRevealedRecall((current) => current.includes(index) ? current.filter((value) => value !== index) : [...current, index])} key={item}><span>Câu {index + 1}</span><strong>{item}</strong><small>{revealedRecall.includes(index) ? "Hãy đối chiếu lại phần trên." : "Nhấn sau khi đã tự trả lời"}</small></button>)}</div>
        </section>

        <section className="quick-checks">
          <h2>Quick Check</h2>
          {quickChecks.map((question) => <QuestionCard key={`${lesson.id}-${question.id}`} question={question} compact onAnswered={(selected, correct, confidence) => recordAnswer(question, selected, correct, confidence, "quick-check")} />)}
        </section>

        <footer className="lesson-footer">
          <div><strong>Bạn đang ở cuối bài</strong><span>Chọn đúng trạng thái để lộ trình thích nghi.</span></div>
          <div>
            <button type="button" className="button ghost" onClick={() => navigate(`practice?topic=${encodeURIComponent(lesson.title)}`)}>Chưa chắc</button>
            <button type="button" className="button secondary" onClick={() => navigate(`practice?module=${lesson.moduleId}`)}>Luyện thêm</button>
            <button type="button" className="button primary" onClick={() => completeLesson(lesson.id, lesson.title)}>{progress.lessonCompletion.includes(lesson.id) ? "Đã ghi nhận" : "Đã hiểu"}<Check size={17} /></button>
          </div>
        </footer>
        <button type="button" className="lab-jump" onClick={() => navigate("labs")}><Beaker /><span><strong>Muốn nhìn concept chuyển động?</strong><small>Mở 18 interactive labs trong trình duyệt.</small></span><ArrowRight /></button>
      </article>
    </div>
  );
}
