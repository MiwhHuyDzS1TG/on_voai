import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { formulas } from "../data/review";
import { MathBlock } from "../components/MathBlock";
import { SourceBadges } from "../components/SourceBadges";

export function FormulasPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const categories = ["Tất cả", ...new Set(formulas.map((formula) => formula.category))];
  const filtered = useMemo(() => formulas.filter((formula) => {
    const matchesQuery = `${formula.name} ${formula.intuition} ${formula.symbols}`.toLocaleLowerCase("vi").includes(query.toLocaleLowerCase("vi"));
    return matchesQuery && (category === "Tất cả" || formula.category === category);
  }), [query, category]);

  return <div className="page formulas-page">
    <header className="page-header"><div><p className="eyebrow">Formula Sheet</p><h1>Công thức cần nhớ, kèm trực giác.</h1><p>Tìm theo tên, ký hiệu hoặc ý nghĩa. Phần mở rộng IAIO được đánh dấu riêng.</p></div></header>
    <div className="formula-toolbar"><label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm precision, entropy, z-score..." /></label><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></div>
    {filtered.length === 0 ? <div className="empty-state"><Search /><p>Không tìm thấy công thức.</p></div> : <div className="formula-list">{filtered.map((formula) => <article key={formula.id}>
      <header><div><span>{formula.category}</span><h2>{formula.name}</h2></div>{formula.extension && <em>Mở rộng IAIO</em>}</header>
      <MathBlock latex={formula.latex} />
      <dl><div><dt>Ký hiệu</dt><dd>{formula.symbols}</dd></div><div><dt>Trực giác</dt><dd>{formula.intuition}</dd></div><div><dt>Ví dụ</dt><dd>{formula.example}</dd></div><div><dt>Bẫy</dt><dd>{formula.pitfall}</dd></div></dl>
      <SourceBadges sources={formula.source} />
    </article>)}</div>}
  </div>;
}
