import { useState } from "react";
import { caseStudies } from "../data/caseStudies";

export function CaseStudyWorkshop() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);
  const selected = caseStudies.find((item) => item.id === selectedId) ?? caseStudies[0];
  return <section className="chapter-section case-workshop" id="lesson-cases">
    <div className="chapter-kicker">12 Case studies</div>
    <div className="case-picker" role="tablist" aria-label="Chọn case study">{caseStudies.map((item, index) => <button type="button" role="tab" aria-selected={item.id === selectedId} className={item.id === selectedId ? "active" : ""} onClick={() => setSelectedId(item.id)} key={item.id}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button>)}</div>
    <article className="case-detail">
      <h2>{selected.title}</h2>
      <p>{selected.scenario}</p>
      <h3>Tự phân tích trước</h3>
      <ol>{selected.questions.map((question) => <li key={question}>{question}</li>)}</ol>
      <details key={selected.id}><summary>Mở đáp án sau khi đã tự trả lời</summary><div>{selected.analysis.map((item) => <section key={item.label}><h4>{item.label}</h4><p>{item.answer}</p></section>)}</div></details>
    </article>
  </section>;
}
