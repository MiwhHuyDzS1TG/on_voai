import { BookOpenCheck, Brain, Check, CircleHelp, Lightbulb, Sigma, Sparkles, TriangleAlert } from "lucide-react";
import type { LessonChapter } from "../types";
import { MathBlock } from "./MathBlock";

type Props = {
  chapter: LessonChapter;
  revealedRecall: number[];
  onToggleRecall: (index: number) => void;
  simplerOpen: boolean;
  onToggleSimpler: () => void;
};

export function LessonChapterView({ chapter, revealedRecall, onToggleRecall, simplerOpen, onToggleSimpler }: Props) {
  return <>
    <section className="lesson-section objectives" id="lesson-objectives">
      <div className="section-icon"><BookOpenCheck /></div>
      <div><h2>Bạn sẽ học được gì?</h2><ul>{chapter.objectives.map((objective) => <li key={objective}><Check size={17} />{objective}</li>)}</ul></div>
    </section>

    <section className="chapter-section chapter-opening" id="lesson-intuition">
      <div className="chapter-kicker"><Brain size={18} />Bắt đầu từ trực giác</div>
      {chapter.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="chapter-section" id="lesson-concepts">
      <div className="chapter-kicker"><CircleHelp size={18} />Khái niệm chính xác</div>
      <div className="concept-stack">{chapter.concepts.map((concept) => <section key={concept.title}><h3>{concept.title}</h3>{concept.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
    </section>

    {chapter.formulas.length > 0 && <section className="chapter-section" id="lesson-formulas">
      <div className="chapter-kicker"><Sigma size={18} />Công thức và ý nghĩa</div>
      <div className="chapter-formulas">{chapter.formulas.map((formula) => <article key={formula.name}>
        <h3>{formula.name}</h3>
        <MathBlock latex={formula.latex} />
        <dl><div><dt>Input</dt><dd>{formula.input}</dd></div><div><dt>Output</dt><dd>{formula.output}</dd></div>{formula.range && <div><dt>Miền giá trị</dt><dd>{formula.range}</dd></div>}<div><dt>Ý nghĩa</dt><dd>{formula.meaning}</dd></div></dl>
        <details><summary>Giải thích từng ký hiệu</summary><ul>{formula.variables.map((variable) => <li key={variable}>{variable}</li>)}</ul></details>
      </article>)}</div>
    </section>}

    <section className="chapter-section" id="lesson-worked-example">
      <div className="chapter-kicker"><Sparkles size={18} />Ví dụ tính từng bước</div>
      <h3>{chapter.workedExample.title}</h3>
      <ol className="worked-steps">{chapter.workedExample.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p className="worked-conclusion"><strong>Kết luận:</strong> {chapter.workedExample.conclusion}</p>
    </section>

    <section className="chapter-section vaio-problem" id="lesson-vaio-example">
      <div className="chapter-kicker">Bài kiểu VAIO</div>
      <h3>{chapter.vaioProblem.prompt}</h3>
      <details><summary>Xem hướng giải và đáp án</summary><ol className="worked-steps">{chapter.vaioProblem.steps.map((step) => <li key={step}>{step}</li>)}</ol><p><strong>Đáp án:</strong> {chapter.vaioProblem.answer}</p></details>
    </section>

    <section className="chapter-section" id="lesson-why">
      <div className="chapter-kicker"><Lightbulb size={18} />Tại sao điều này quan trọng?</div>
      {chapter.whyImportant.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="chapter-section misconception-section" id="lesson-misconceptions">
      <div className="chapter-kicker"><TriangleAlert size={18} />Dễ nhầm và phản ví dụ</div>
      <div>{chapter.misconceptions.map((item) => <article key={item.claim}><h3>“{item.claim}”</h3><p><strong>Sửa lại:</strong> {item.correction}</p><p><strong>Phản ví dụ:</strong> {item.counterexample}</p></article>)}</div>
    </section>

    <section className="active-recall" id="lesson-recall">
      <div className="section-heading"><div><h2>Kiểm tra nhanh</h2><p>Tự trả lời trước khi mở đáp án.</p></div></div>
      <div className="recall-grid">{chapter.recall.map((item, index) => <button type="button" className={revealedRecall.includes(index) ? "revealed" : ""} onClick={() => onToggleRecall(index)} key={item.prompt}><span>Câu {index + 1}</span><strong>{item.prompt}</strong><small>{revealedRecall.includes(index) ? item.answer : "Nhấn để xem đáp án"}</small></button>)}</div>
    </section>

    <section className="chapter-section remember-section" id="lesson-summary">
      <div className="chapter-kicker">Nếu chỉ nhớ 5 điều</div>
      <ol>{chapter.remember.map((item) => <li key={item}>{item}</li>)}</ol>
    </section>

    <section className="simpler-section">
      <button type="button" className="button secondary" onClick={onToggleSimpler}>Tôi vẫn chưa hiểu</button>
      {simplerOpen && <div><h3>Giải thích theo một cách khác</h3>{chapter.simplerExplanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
    </section>
  </>;
}
