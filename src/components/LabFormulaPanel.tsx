import { useState } from "react";
import { BookOpenCheck, GraduationCap, Lightbulb, Sigma } from "lucide-react";
import type { LabFormulaGuide } from "../data/labFormulas";
import { MathBlock } from "./MathBlock";

export function LabFormulaPanel({ guide }: { guide: LabFormulaGuide }) {
  const [mode, setMode] = useState<"formula" | "grade12">("formula");
  return <section className="lab-formula-panel" aria-label="Công thức cần nhớ">
    <div className="lab-formula-tabs" role="tablist" aria-label="Cách xem công thức">
      <button type="button" role="tab" aria-selected={mode === "formula"} className={mode === "formula" ? "active" : ""} onClick={() => setMode("formula")}><Sigma size={17} />Công thức chuẩn</button>
      <button type="button" role="tab" aria-selected={mode === "grade12"} className={mode === "grade12" ? "active" : ""} onClick={() => setMode("grade12")}><GraduationCap size={17} />Hiểu theo lớp 12</button>
    </div>
    {mode === "formula" ? <div className="formula-mode" role="tabpanel">
      <div className="lab-formula-list">{guide.formulas.map((formula) => <article key={formula.label}><span>{formula.label}</span><div className="formula-scroll"><MathBlock latex={formula.latex} /></div></article>)}</div>
      <p className="symbol-note"><BookOpenCheck size={17} /><span><strong>Ký hiệu:</strong> {guide.symbols}</span></p>
    </div> : <div className="grade12-mode" role="tabpanel">
      <div><GraduationCap size={22} /><span><strong>Nói bằng ngôn ngữ Toán 12</strong><p>{guide.grade12}</p></span></div>
      <div><BookOpenCheck size={22} /><span><strong>Ví dụ nhanh</strong><p>{guide.example}</p></span></div>
    </div>}
    <p className="memory-line"><Lightbulb size={17} /><span><strong>Mẹo nhớ:</strong> {guide.memory}</span></p>
  </section>;
}
