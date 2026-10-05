import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Check, Lightbulb, X } from "lucide-react";
import type { AnswerValue, Question } from "../types";
import { answerToText, isAnswerCorrect } from "../utils/question";
import { SourceBadges } from "./SourceBadges";

type Props = {
  question: Question;
  onAnswered: (selected: AnswerValue, correct: boolean, confidence: number) => void;
  compact?: boolean;
};

export function QuestionCard({ question, onAnswered, compact = false }: Props) {
  const initial = useMemo<AnswerValue>(() => question.type === "multiple-choice" ? [] : question.type === "ordering" ? [...(question.choices ?? [])] : "", [question]);
  const [selected, setSelected] = useState<AnswerValue>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);
  const [confidence, setConfidence] = useState(2);
  const correct = submitted ? isAnswerCorrect(question, selected) : false;

  const toggleMultiple = (choice: string) => {
    const current = Array.isArray(selected) ? selected : [];
    setSelected(current.includes(choice) ? current.filter((item) => item !== choice) : [...current, choice]);
  };

  const move = (index: number, direction: -1 | 1) => {
    const current = Array.isArray(selected) ? [...selected] : [];
    const target = index + direction;
    if (target < 0 || target >= current.length) return;
    [current[index], current[target]] = [current[target], current[index]];
    setSelected(current);
  };

  const canSubmit = Array.isArray(selected) ? selected.length > 0 : selected !== "";
  const submit = () => {
    if (!canSubmit || submitted) return;
    const result = isAnswerCorrect(question, selected);
    setSubmitted(true);
    onAnswered(selected, result, confidence);
  };

  return (
    <article className={`question-card ${compact ? "compact" : ""}`}>
      <header className="question-header">
        <div>
          <span className={`difficulty ${question.difficulty}`}>{question.difficulty === "iaio" ? "IAIO-style" : question.difficulty}</span>
          <span className="question-type">{question.type}</span>
        </div>
        <SourceBadges sources={question.source} />
      </header>
      <h3>{question.prompt}</h3>

      {question.type === "numeric" ? (
        <label className="field">
          <span>Câu trả lời</span>
          <input type="number" step="any" value={selected as string | number} onChange={(event) => setSelected(event.target.value === "" ? "" : Number(event.target.value))} disabled={submitted} />
        </label>
      ) : question.type === "ordering" ? (
        <ol className="ordering-list">
          {(selected as string[]).map((item, index) => (
            <li key={item}>
              <span>{index + 1}. {item}</span>
              <span className="order-actions">
                <button type="button" className="icon-button" onClick={() => move(index, -1)} disabled={submitted || index === 0} aria-label={`Đưa ${item} lên`}><ArrowUp size={16} /></button>
                <button type="button" className="icon-button" onClick={() => move(index, 1)} disabled={submitted || index === (selected as string[]).length - 1} aria-label={`Đưa ${item} xuống`}><ArrowDown size={16} /></button>
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="choice-list">
          {(question.type === "true-false" ? ["Đúng", "Sai"] : question.choices ?? []).map((choice) => {
            const value: AnswerValue = question.type === "true-false" ? choice === "Đúng" : choice;
            const active = Array.isArray(selected) ? selected.includes(choice) : selected === value;
            return (
              <button
                type="button"
                className={`choice ${active ? "selected" : ""}`}
                key={choice}
                disabled={submitted}
                onClick={() => question.type === "multiple-choice" ? toggleMultiple(choice) : setSelected(value)}
              >
                <span className="choice-marker">{active ? <Check size={15} /> : null}</span>
                {choice}
              </button>
            );
          })}
        </div>
      )}

      {!submitted && (
        <div className="question-footer">
          <div className="confidence" aria-label="Mức tự tin">
            <span>Tự tin</span>
            {[1, 2, 3, 4].map((level) => <button type="button" className={confidence === level ? "active" : ""} onClick={() => setConfidence(level)} key={level}>{level}</button>)}
          </div>
          <div className="question-actions">
            {question.hints && hintsShown < question.hints.length && <button type="button" className="button ghost" onClick={() => setHintsShown((count) => count + 1)}><Lightbulb size={17} /> Hint {hintsShown + 1}</button>}
            <button type="button" className="button primary" disabled={!canSubmit} onClick={submit}>Kiểm tra</button>
          </div>
        </div>
      )}

      {hintsShown > 0 && !submitted && <div className="hint-stack">{question.hints?.slice(0, hintsShown).map((hint, index) => <p key={hint}><strong>Hint {index + 1}:</strong> {hint}</p>)}</div>}

      {submitted && (
        <div className={`feedback ${correct ? "correct" : "incorrect"}`} role="status">
          <div className="feedback-title">{correct ? <Check size={20} /> : <X size={20} />} {correct ? "Chính xác" : "Chưa đúng"}</div>
          {!correct && <p><strong>Đáp án:</strong> {answerToText(question.answer)}</p>}
          <p>{question.explanation}</p>
          {!correct && typeof selected === "string" && (question.choiceExplanations?.[selected] || question.wrongChoiceExplanations?.[selected]) && <p className="why-wrong">Vì sao lựa chọn này sai: {question.choiceExplanations?.[selected] ?? question.wrongChoiceExplanations?.[selected]}</p>}
        </div>
      )}
    </article>
  );
}
