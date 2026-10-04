import { useEffect, useMemo, useState } from "react";
import { AlarmClock, ArrowLeft, ArrowRight, Check, ClipboardCheck, Flag, RotateCcw } from "lucide-react";
import { diagnosticQuestions, questionBank } from "../data/questions";
import { modules } from "../data/curriculum";
import { useProgress } from "../state/ProgressContext";
import type { AnswerValue, Difficulty, MockResult, Question } from "../types";
import { isAnswerCorrect } from "../utils/question";
import { makeGeneratedQuestions } from "../utils/generators";

const formatTime = (seconds: number): string => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
const shuffle = <T,>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5);

export function ExamPage({ diagnostic = false, onDiagnosticComplete, navigate }: { diagnostic?: boolean; onDiagnosticComplete?: () => void; navigate: (route: string) => void }) {
  const { recordAnswer, addMock } = useProgress();
  const [count, setCount] = useState(diagnostic ? diagnosticQuestions.length : 20);
  const [minutes, setMinutes] = useState(diagnostic ? 30 : 30);
  const [difficulty, setDifficulty] = useState<Difficulty | "mixed">("mixed");
  const [selectedModules, setSelectedModules] = useState(modules.map((module) => module.id));
  const [session, setSession] = useState<Question[]>(diagnostic ? diagnosticQuestions : []);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [index, setIndex] = useState(0);
  const [marked, setMarked] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState((diagnostic ? 30 : minutes) * 60);
  const [startedAt, setStartedAt] = useState(Date.now());
  const [result, setResult] = useState<MockResult | null>(null);

  useEffect(() => {
    if (session.length === 0 || result) return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [session.length, result]);

  useEffect(() => {
    if (secondsLeft === 0 && session.length > 0 && !result) submitExam();
  });

  const current = session[index];
  const setAnswer = (value: AnswerValue) => current && setAnswers((items) => ({ ...items, [current.id]: value }));
  const toggleMultiple = (choice: string) => {
    if (!current) return;
    const selected = Array.isArray(answers[current.id]) ? answers[current.id] as string[] : [];
    setAnswer(selected.includes(choice) ? selected.filter((item) => item !== choice) : [...selected, choice]);
  };
  const moveOrder = (direction: -1 | 1) => {
    if (!current) return;
    const order = Array.isArray(answers[current.id]) ? [...answers[current.id] as string[]] : [...(current.choices ?? [])];
    const selectedIndex = 0;
    const target = selectedIndex + direction;
    if (target >= 0 && target < order.length) [order[selectedIndex], order[target]] = [order[target], order[selectedIndex]];
    setAnswer(order);
  };

  const start = () => {
    const pool = questionBank.filter((question) => selectedModules.includes(question.module) && (difficulty === "mixed" || question.difficulty === difficulty));
    const fixed = shuffle(pool).slice(0, count);
    const generated = fixed.length < count ? makeGeneratedQuestions(count - fixed.length) : [];
    setSession([...fixed, ...generated]);
    setAnswers({});
    setMarked([]);
    setIndex(0);
    setResult(null);
    setSecondsLeft(minutes * 60);
    setStartedAt(Date.now());
  };

  function submitExam() {
    if (session.length === 0 || result) return;
    const correctQuestions = session.filter((question) => answers[question.id] !== undefined && isAnswerCorrect(question, answers[question.id]));
    const byModule: MockResult["byModule"] = {};
    session.forEach((question) => {
      const module = byModule[question.module] ?? { correct: 0, total: 0 };
      module.total += 1;
      if (answers[question.id] !== undefined && isAnswerCorrect(question, answers[question.id])) module.correct += 1;
      byModule[question.module] = module;
      recordAnswer(question, answers[question.id] ?? "Chưa trả lời", answers[question.id] !== undefined && isAnswerCorrect(question, answers[question.id]), 2, diagnostic ? "diagnostic" : "exam");
    });
    const mock: MockResult = {
      id: `mock-${Date.now()}`,
      title: diagnostic ? "Diagnostic test" : `${session.length} câu, ${minutes} phút`,
      score: correctQuestions.length,
      total: session.length,
      durationSeconds: Math.round((Date.now() - startedAt) / 1000),
      completedAt: new Date().toISOString(),
      byModule,
      questionIds: session.map((question) => question.id),
    };
    setResult(mock);
    if (!diagnostic) addMock(mock);
    else onDiagnosticComplete?.();
  }

  const breakdown = useMemo(() => result ? Object.entries(result.byModule).map(([id, values]) => ({ ...modules.find((module) => module.id === id), ...values })) : [], [result]);

  if (result) return <div className="page exam-result">
    <div className="result-hero"><div className="summary-mark"><ClipboardCheck /></div><p className="eyebrow">{diagnostic ? "Diagnostic hoàn thành" : "Đã nộp bài"}</p><h1>{result.score}/{result.total}</h1><p>{diagnostic ? "Đây là bản đồ điểm mạnh và yếu, không phải điểm VAIO thật." : `Hoàn thành trong ${formatTime(result.durationSeconds)}.`}</p></div>
    <section className="panel result-breakdown"><h2>Theo module</h2>{breakdown.map((item) => <div key={item.id}><span>0{item.index}. {item.shortTitle}</span><div className="bar-track"><span style={{ width: `${item.total ? item.correct / item.total * 100 : 0}%` }} /></div><strong>{item.correct}/{item.total}</strong></div>)}</section>
    <section className="result-mistakes"><h2>Câu cần xem lại</h2>{session.filter((question) => answers[question.id] === undefined || !isAnswerCorrect(question, answers[question.id])).slice(0, 8).map((question) => <article key={question.id}><span>{question.topic}</span><strong>{question.prompt}</strong><p>{question.explanation}</p></article>)}</section>
    <div className="summary-actions"><button type="button" className="button primary" onClick={() => navigate("practice?mistakes=1")}>Tạo buổi ôn từ bài này <ArrowRight size={17} /></button><button type="button" className="button secondary" onClick={() => { setSession([]); setResult(null); }}><RotateCcw size={17} />Thi bài khác</button></div>
  </div>;

  if (session.length === 0) return <div className="page exam-setup">
    <header className="page-header"><div><p className="eyebrow">Exam Mode</p><h1>Mô phỏng áp lực, không lộ lời giải.</h1><p>Bạn tự cấu hình. Các preset không phải cấu trúc thi VAIO chính thức.</p></div></header>
    <section className="preset-row"><button onClick={() => { setCount(20); setMinutes(25); }}><strong>Quick Mock</strong><span>20 câu, 25 phút</span></button><button onClick={() => { setCount(40); setMinutes(55); }}><strong>Standard Mock</strong><span>40 câu, 55 phút</span></button><button onClick={() => { setCount(60); setMinutes(85); }}><strong>Full Review</strong><span>60 câu, 85 phút</span></button></section>
    <section className="setup-panel exam-config"><div className="filter-grid"><label className="field"><span>Số câu</span><input type="number" min="5" max="60" value={count} onChange={(event) => setCount(Number(event.target.value))} /></label><label className="field"><span>Thời gian (phút)</span><input type="number" min="5" max="180" value={minutes} onChange={(event) => setMinutes(Number(event.target.value))} /></label><label className="field"><span>Difficulty</span><select value={difficulty} onChange={(event) => setDifficulty(event.target.value as Difficulty | "mixed")}><option value="mixed">Mixed</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="iaio">IAIO-style</option></select></label></div><fieldset><legend>Topic distribution</legend><div className="module-picker">{modules.map((module) => <button type="button" className={selectedModules.includes(module.id) ? "active" : ""} onClick={() => setSelectedModules((current) => current.includes(module.id) ? current.filter((id) => id !== module.id) : [...current, module.id])} key={module.id}>{selectedModules.includes(module.id) && <Check size={14} />}0{module.index}. {module.shortTitle}</button>)}</div></fieldset><button type="button" className="button primary setup-start" disabled={selectedModules.length === 0} onClick={start}>Bắt đầu thi <ArrowRight size={18} /></button></section>
  </div>;

  if (!current) return null;
  const selected = answers[current.id];
  return <div className="page exam-session">
    <header className="exam-bar"><div><span>{diagnostic ? "Diagnostic" : "Exam Mode"}</span><strong>Câu {index + 1}/{session.length}</strong></div><div className={secondsLeft < 300 ? "timer warning" : "timer"}><AlarmClock size={18} />{formatTime(secondsLeft)}</div><button type="button" className="button danger" onClick={submitExam}>Nộp bài</button></header>
    <div className="exam-layout"><aside className="question-navigator"><h2>Điều hướng</h2><div>{session.map((question, questionIndex) => <button type="button" key={question.id} className={`${questionIndex === index ? "active" : ""} ${answers[question.id] !== undefined ? "answered" : ""} ${marked.includes(question.id) ? "marked" : ""}`} onClick={() => setIndex(questionIndex)}>{questionIndex + 1}</button>)}</div><p><span className="nav-key answered" />Đã trả lời <span className="nav-key marked" />Đánh dấu</p></aside>
      <section className="exam-question"><header><div><span className={`difficulty ${current.difficulty}`}>{current.difficulty}</span><span>{current.topic}</span></div><button type="button" className={`button ghost ${marked.includes(current.id) ? "active" : ""}`} onClick={() => setMarked((items) => items.includes(current.id) ? items.filter((id) => id !== current.id) : [...items, current.id])}><Flag size={16} />Xem lại</button></header><h1>{current.prompt}</h1>
        {current.type === "numeric" ? <label className="field"><span>Đáp án số</span><input type="number" step="any" value={selected as number ?? ""} onChange={(event) => setAnswer(event.target.value === "" ? "" : Number(event.target.value))} /></label> : current.type === "ordering" ? <div className="ordering-list exam-order">{((selected as string[] | undefined) ?? current.choices ?? []).map((item, orderIndex) => <div key={item}><span>{orderIndex+1}. {item}</span>{orderIndex === 0 && <><button onClick={() => moveOrder(1)}>Xuống</button></>}</div>)}</div> : <div className="choice-list">{(current.type === "true-false" ? ["Đúng","Sai"] : current.choices ?? []).map((choice) => { const value: AnswerValue = current.type === "true-false" ? choice === "Đúng" : choice; const active = Array.isArray(selected) ? selected.includes(choice) : selected === value; return <button type="button" className={`choice ${active ? "selected" : ""}`} key={choice} onClick={() => current.type === "multiple-choice" ? toggleMultiple(choice) : setAnswer(value)}><span className="choice-marker">{active && <Check size={15}/>}</span>{choice}</button>; })}</div>}
        <footer><button type="button" className="button secondary" disabled={index === 0} onClick={() => setIndex((value) => value-1)}><ArrowLeft size={17}/>Câu trước</button><button type="button" className="button primary" disabled={index === session.length-1} onClick={() => setIndex((value) => value+1)}>Câu sau<ArrowRight size={17}/></button></footer>
      </section>
    </div>
  </div>;
}
