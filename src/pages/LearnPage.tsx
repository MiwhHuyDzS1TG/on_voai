import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Beaker, Check } from "lucide-react";
import { lessonById, lessons, modules } from "../data/curriculum";
import { lessonChapterById } from "../data/lessonChapters";
import { questionBank } from "../data/questions";
import { useProgress } from "../state/ProgressContext";
import { QuestionCard } from "../components/QuestionCard";
import { SourceBadges } from "../components/SourceBadges";
import { LessonChapterView } from "../components/LessonChapterView";
import { CaseStudyWorkshop } from "../components/CaseStudyWorkshop";
import { LogicReasoningWorkshop } from "../components/LogicReasoningWorkshop";

const tocItems = [
  ["lesson-objectives", "Mục tiêu"],
  ["lesson-intuition", "Trực giác"],
  ["lesson-concepts", "Khái niệm"],
  ["lesson-formulas", "Công thức"],
  ["lesson-worked-example", "Ví dụ từng bước"],
  ["lesson-vaio-example", "Bài kiểu VAIO"],
  ["lesson-misconceptions", "Dễ nhầm"],
  ["lesson-recall", "Kiểm tra nhanh"],
  ["lesson-cases", "Case studies"],
  ["lesson-logic", "Logic reasoning"],
  ["lesson-practice", "Bài luyện"],
  ["lesson-summary", "Tóm tắt"],
] as const;

export function LearnPage({ initialLesson, initialModule, navigate }: { initialLesson?: string; initialModule?: string; navigate: (route: string) => void }) {
  const firstLesson = initialLesson && lessonById[initialLesson] ? initialLesson : modules.find((item) => item.id === initialModule)?.lessonIds[0] ?? lessons[0].id;
  const [selectedId, setSelectedId] = useState(firstLesson);
  const [revealedRecall, setRevealedRecall] = useState<number[]>([]);
  const [simplerOpen, setSimplerOpen] = useState(false);
  const { progress, completeLesson, recordAnswer } = useProgress();
  const lesson = lessonById[selectedId];
  const chapter = lessonChapterById[selectedId];
  const lessonIndex = lessons.findIndex((item) => item.id === selectedId);
  const previous = lessons[lessonIndex - 1];
  const next = lessons[lessonIndex + 1];
  const practice = useMemo(() => {
    const exact = questionBank.filter((question) => question.lessonId === selectedId);
    const fallback = questionBank.filter((question) => question.module === lesson.moduleId);
    return (exact.length >= 4 ? exact : [...exact, ...fallback.filter((question) => !exact.includes(question))]).slice(0, 4);
  }, [lesson.moduleId, selectedId]);

  const selectLesson = (id: string) => {
    setSelectedId(id);
    setRevealedRecall([]);
    setSimplerOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="page learn-layout">
      <aside className="knowledge-nav">
        <div className="knowledge-heading"><span>Chương trình học</span><strong>{progress.lessonCompletion.length}/{lessons.length} bài</strong></div>
        {modules.map((module) => (
          <details key={module.id} open={module.lessonIds.includes(selectedId)}>
            <summary><span>0{module.index}</span>{module.shortTitle}</summary>
            <div>{module.lessonIds.map((id) => <button type="button" className={selectedId === id ? "active" : ""} onClick={() => selectLesson(id)} key={id}>{progress.lessonCompletion.includes(id) ? <Check size={15} /> : <span className="lesson-dot" />}{lessonById[id].title}</button>)}</div>
          </details>
        ))}
      </aside>

      <article className="lesson-content">
        <header className="lesson-hero">
          <div><SourceBadges sources={chapter?.sources.map((source) => source.label) ?? lesson.sources} />{lesson.extension && <span className="extension-badge">Mở rộng IAIO</span>}</div>
          <h1>{lesson.title}</h1>
          <p>{lesson.summary}</p>
        </header>

        {chapter ? <LessonChapterView
          chapter={chapter}
          revealedRecall={revealedRecall}
          onToggleRecall={(index) => setRevealedRecall((current) => current.includes(index) ? current.filter((value) => value !== index) : [...current, index])}
          simplerOpen={simplerOpen}
          onToggleSimpler={() => setSimplerOpen((value) => !value)}
        /> : <p>Không tìm thấy nội dung bài học.</p>}

        {selectedId === "problem-solving" && <CaseStudyWorkshop />}
        {selectedId === "problem-solving" && <LogicReasoningWorkshop />}

        <section className="quick-checks chapter-practice" id="lesson-practice">
          <div className="section-heading"><div><h2>Bài luyện theo lesson</h2><p>Lời giải chỉ hiện sau khi nộp. Câu sai được lưu vào Sổ câu sai.</p></div></div>
          {practice.map((question) => <QuestionCard key={`${lesson.id}-${question.id}`} question={question} compact onAnswered={(selected, correct, confidence) => recordAnswer(question, selected, correct, confidence, "quick-check")} />)}
          <button type="button" className="button secondary topic-practice-button" onClick={() => navigate(`practice?topic=${encodeURIComponent(practice[0]?.topic ?? lesson.title)}`)}>Luyện chủ đề này <ArrowRight size={16} /></button>
        </section>

        <footer className="lesson-footer chapter-footer">
          <div><strong>Kết thúc bài</strong><span>Chỉ đánh dấu đã đọc; mastery còn phụ thuộc kết quả luyện tập.</span></div>
          <div>
            {previous && <button type="button" className="button ghost" onClick={() => selectLesson(previous.id)}><ArrowLeft size={16} />Bài trước</button>}
            <button type="button" className="button secondary" onClick={() => navigate("review")}>Ôn flashcard</button>
            <button type="button" className="button primary" onClick={() => completeLesson(lesson.id, lesson.title)}>{progress.lessonCompletion.includes(lesson.id) ? "Đã ghi nhận" : "Đánh dấu đã đọc"}<Check size={17} /></button>
            {next && <button type="button" className="button ghost" onClick={() => selectLesson(next.id)}>Bài tiếp theo<ArrowRight size={16} /></button>}
          </div>
        </footer>
        <button type="button" className="lab-jump" onClick={() => navigate("labs")}><Beaker /><span><strong>Học bằng mô phỏng</strong><small>Mở 21 interactive labs có công thức và bản giải thích lớp 12.</small></span><ArrowRight /></button>
      </article>

      <aside className="lesson-toc" aria-label="Mục lục bài học">
        <strong>Trong bài này</strong>
        <nav>{tocItems.filter(([id]) => (id !== "lesson-formulas" || chapter?.formulas.length) && (!["lesson-cases", "lesson-logic"].includes(id) || selectedId === "problem-solving")).map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        <button type="button" className="button primary" onClick={() => document.querySelector("#lesson-practice")?.scrollIntoView({ behavior: "smooth" })}>Luyện bài này</button>
      </aside>
    </div>
  );
}
