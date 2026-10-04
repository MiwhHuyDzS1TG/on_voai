import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { lessons } from "../data/curriculum";
import { flashcards, formulas, traps } from "../data/review";

type SearchResult = { id: string; title: string; detail: string; route: string };

export function SearchDialog({ open, onClose, onNavigate }: { open: boolean; onClose: () => void; onNavigate: (route: string) => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo<SearchResult[]>(() => {
    const all: SearchResult[] = [
      ...lessons.map((item) => ({ id: item.id, title: item.title, detail: item.summary, route: `learn?lesson=${item.id}` })),
      ...formulas.map((item) => ({ id: item.id, title: item.name, detail: `${item.category}: ${item.intuition}`, route: "formulas" })),
      ...flashcards.map((item) => ({ id: item.id, title: item.front, detail: item.definition, route: "review" })),
      ...traps.map((item) => ({ id: item.id, title: item.title, detail: item.falseClaim, route: "traps" })),
    ];
    const normalized = query.trim().toLocaleLowerCase("vi");
    if (!normalized) return all.slice(0, 8);
    return all.filter((item) => `${item.title} ${item.detail}`.toLocaleLowerCase("vi").includes(normalized)).slice(0, 12);
  }, [query]);

  if (!open) return null;
  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm" onMouseDown={(event) => event.stopPropagation()}>
        <div className="search-input-wrap">
          <Search size={20} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm recall, leakage, công thức..." />
          <button type="button" className="icon-button" onClick={onClose} aria-label="Đóng tìm kiếm"><X size={19} /></button>
        </div>
        <div className="search-results">
          {results.length === 0 ? <div className="empty-state"><Search /><p>Không tìm thấy nội dung phù hợp.</p></div> : results.map((result) => (
            <button type="button" key={`${result.route}-${result.id}`} onClick={() => { onNavigate(result.route); onClose(); }}>
              <strong>{result.title}</strong>
              <span>{result.detail}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
