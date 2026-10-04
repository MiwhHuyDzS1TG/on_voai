import { useMemo, useState } from "react";
import { ArrowRight, Filter, RotateCcw, Sparkles, Target } from "lucide-react";
import { modules } from "../data/curriculum";
import { questionBank } from "../data/questions";
import { useProgress } from "../state/ProgressContext";
import type { AnswerValue, Difficulty, QuestionType } from "../types";
import { makeGeneratedQuestions } from "../utils/generators";
import { QuestionCard } from "../components/QuestionCard";

const shuffled = <T,>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5);

export function PracticePage({ initialTopic, initialModule, onlyMistakes = false }: { initialTopic?: string; initialModule?: string; onlyMistakes?: boolean }) {
  const { progress, recordAnswer } = useProgress();
  const [count, setCount] = useState(10);
  const [topic, setTopic] = useState(initialTopic ?? "all");
  const [module, setModule] = useState(initialModule ?? "all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [type, setType] = useState<QuestionType | "all">("all");
  const [mistakesOnly, setMistakesOnly] = useState(onlyMistakes);
  const [unansweredOnly, setUnansweredOnly] = useState(false);
  const [session, setSession] = useState<typeof questionBank>([]);
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const topics = useMemo(() => [...new Set(questionBank.map((question) => question.topic))].sort(), []);
  const available = useMemo(() => questionBank.filter((question) => {
    if (module !== "all" && question.module !== module) return false;
    if (topic !== "all" && question.topic !== topic && !question.topic.toLocaleLowerCase("vi").includes(topic.toLocaleLowerCase("vi"))) return false;
    if (difficulty !== "all" && question.difficulty !== difficulty) return false;
    if (type !== "all" && question.type !== type) return false;
    if (mistakesOnly && !progress.mistakes.some((item) => item.questionId === question.id)) return false;
    if (unansweredOnly && progress.answers.some((item) => item.questionId === question.id)) return false;
    return true;
  }), [module, topic, difficulty, type, mistakesOnly, unansweredOnly, progress.mistakes, progress.answers]);

  const start = () => {
    const selected = shuffled(available).slice(0, count);
    const generated = selected.length < count && !mistakesOnly && !unansweredOnly ? makeGeneratedQuestions(count - selected.length) : [];
    setSession([...selected, ...generated]);
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  };

  const current = session[index];
  const onAnswered = (selected: AnswerValue, correct: boolean, confidence: number) => {
    recordAnswer(current, selected, correct, confidence, "practice");
    if (correct) setScore((value) => value + 1);
    setAnswered(true);
  };

  const next = () => {
    if (index + 1 >= session.length) setFinished(true);
    else { setIndex((value) => value + 1); setAnswered(false); }
  };

  if (finished) return (
    <div className="page session-summary">
      <div className="summary-mark"><Target /></div>
      <p className="eyebrow">Hoàn thành phiên luyện</p>
      <h1>{score}/{session.length} câu đúng</h1>
      <p>Mỗi câu sai đã được lưu vào Sổ câu sai và đưa vào hàng đợi ôn lại.</p>
      <div className="summary-actions"><button type="button" className="button primary" onClick={start}><RotateCcw size={17} /> Luyện lại</button><button type="button" className="button secondary" onClick={() => { setSession([]); setFinished(false); }}>Đổi cấu hình</button></div>
    </div>
  );

  if (session.length > 0 && current) return (
    <div className="page practice-session">
      <header className="session-top"><div><span>Practice session</span><strong>Câu {index + 1}/{session.length}</strong></div><div className="session-progress"><span style={{ width: `${((index + (answered ? 1 : 0)) / session.length) * 100}%` }} /></div><b>{score} đúng</b></header>
      <QuestionCard key={current.id} question={current} onAnswered={onAnswered} />
      {answered && <div className="next-row"><button type="button" className="button primary" onClick={next}>{index + 1 === session.length ? "Xem tổng kết" : "Câu tiếp theo"}<ArrowRight size={17} /></button></div>}
    </div>
  );

  return (
    <div className="page practice-setup">
      <header className="page-header"><div><p className="eyebrow">Luyện tập thích nghi</p><h1>Tạo một phiên vừa đúng sức.</h1><p>Trộn recall, calculation và scenario. Câu tính toán có số mới mỗi lần.</p></div><div className="setup-visual"><Sparkles /><strong>{available.length}</strong><span>câu phù hợp</span></div></header>
      <section className="setup-panel">
        <div className="setup-section"><label>Số câu</label><div className="count-options">{[5, 10, 20].map((value) => <button type="button" className={count === value ? "active" : ""} onClick={() => setCount(value)} key={value}>{value} câu</button>)}<label className="custom-count">Custom<input type="number" min="1" max="60" value={count} onChange={(event) => setCount(Math.max(1, Math.min(60, Number(event.target.value))))} /></label></div></div>
        <div className="filter-grid">
          <label className="field"><span>Module</span><select value={module} onChange={(event) => setModule(event.target.value)}><option value="all">Tất cả module</option>{modules.map((item) => <option value={item.id} key={item.id}>0{item.index}. {item.shortTitle}</option>)}</select></label>
          <label className="field"><span>Topic</span><select value={topic} onChange={(event) => setTopic(event.target.value)}><option value="all">Tất cả topic</option>{topics.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
          <label className="field"><span>Difficulty</span><select value={difficulty} onChange={(event) => setDifficulty(event.target.value as Difficulty | "all")}><option value="all">Mixed</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="iaio">IAIO-style</option></select></label>
          <label className="field"><span>Question type</span><select value={type} onChange={(event) => setType(event.target.value as QuestionType | "all")}><option value="all">Mixed</option><option value="single-choice">Multiple Choice</option><option value="multiple-choice">Multiple Select</option><option value="true-false">True / False</option><option value="numeric">Calculation</option><option value="scenario">Scenario</option><option value="ordering">Fix the Pipeline</option></select></label>
        </div>
        <div className="toggle-row"><label><input type="checkbox" checked={mistakesOnly} onChange={(event) => setMistakesOnly(event.target.checked)} />Chỉ câu sai</label><label><input type="checkbox" checked={unansweredOnly} onChange={(event) => setUnansweredOnly(event.target.checked)} />Chỉ câu chưa làm</label><span><Filter size={15} /> Mixed review dùng interleaving</span></div>
        {available.length === 0 && (mistakesOnly || unansweredOnly) && <div className="inline-message">Không có câu phù hợp với bộ lọc này. Hãy nới bộ lọc hoặc chọn Mixed review.</div>}
        <button type="button" className="button primary setup-start" onClick={start} disabled={available.length === 0 && (mistakesOnly || unansweredOnly)}>Bắt đầu phiên {count} câu <ArrowRight size={18} /></button>
      </section>
    </div>
  );
}
