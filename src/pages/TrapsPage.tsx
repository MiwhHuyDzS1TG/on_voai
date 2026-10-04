import { useState } from "react";
import { Check, Eye, TriangleAlert } from "lucide-react";
import { traps } from "../data/review";
import { SourceBadges } from "../components/SourceBadges";

export function TrapsPage() {
  const [revealed, setRevealed] = useState<string[]>([]);
  return <div className="page traps-page">
    <header className="page-header"><div><p className="eyebrow">Bẫy VAIO</p><h1>Những câu nghe hợp lý nhưng sai.</h1><p>Đọc phát biểu, tự phản biện, rồi kiểm tra ngay bằng một câu ngắn.</p></div><div className="trap-count"><TriangleAlert /><strong>{traps.length}</strong><span>bẫy cốt lõi</span></div></header>
    <div className="trap-list">{traps.map((trap, index) => {
      const isOpen = revealed.includes(trap.id);
      return <article key={trap.id}>
        <div className="trap-number">{String(index + 1).padStart(2, "0")}</div>
        <div className="trap-content"><SourceBadges sources={trap.source} /><h2>{trap.title}</h2><blockquote>“{trap.falseClaim}”</blockquote><p><strong>Vì sao sai:</strong> {trap.whyWrong}</p><p><strong>Cách nhớ:</strong> {trap.memoryHook}</p><div className="trap-check"><span>{trap.check}</span><button type="button" className="button ghost" onClick={() => setRevealed((current) => current.includes(trap.id) ? current.filter((id) => id !== trap.id) : [...current, trap.id])}>{isOpen ? <Check size={16} /> : <Eye size={16} />}{isOpen ? trap.answer : "Xem đáp án"}</button></div></div>
      </article>;
    })}</div>
  </div>;
}
