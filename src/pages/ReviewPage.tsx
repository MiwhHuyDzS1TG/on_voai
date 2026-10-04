import { useMemo, useState } from "react";
import { ArrowLeftRight, BrainCircuit, Check, RotateCcw } from "lucide-react";
import { compareCards, flashcards, formulas } from "../data/review";
import { useProgress } from "../state/ProgressContext";
import { MathBlock } from "../components/MathBlock";
import { SourceBadges } from "../components/SourceBadges";

type Tab = "flashcards" | "compare" | "formula";

export function ReviewPage() {
  const [tab, setTab] = useState<Tab>("flashcards");
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [hiddenFormula, setHiddenFormula] = useState(true);
  const { progress, reviewFlashcard } = useProgress();
  const dueCards = useMemo(() => flashcards.filter((card) => !progress.flashcards[card.id] || new Date(progress.flashcards[card.id].dueAt) <= new Date()), [progress.flashcards]);
  const deck = dueCards.length ? dueCards : flashcards;
  const card = deck[cardIndex % deck.length];
  const formula = formulas[cardIndex % formulas.length];

  const rate = (rating: "again" | "hard" | "good" | "easy") => {
    reviewFlashcard(card.id, rating);
    setFlipped(false);
    setCardIndex((index) => index + 1);
  };

  return (
    <div className="page review-page">
      <header className="page-header"><div><p className="eyebrow">Ôn nhanh</p><h1>Nhớ bằng cách tự gọi lại.</h1><p>Flashcard đến hạn trước, rồi interleave các cặp dễ nhầm và công thức.</p></div><div className="due-chip"><BrainCircuit /><span><strong>{dueCards.length}</strong> thẻ đến hạn</span></div></header>
      <div className="segmented-control" role="tablist">
        <button role="tab" aria-selected={tab === "flashcards"} className={tab === "flashcards" ? "active" : ""} onClick={() => setTab("flashcards")}>Flashcards</button>
        <button role="tab" aria-selected={tab === "compare"} className={tab === "compare" ? "active" : ""} onClick={() => setTab("compare")}>Compare Cards</button>
        <button role="tab" aria-selected={tab === "formula"} className={tab === "formula" ? "active" : ""} onClick={() => setTab("formula")}>Formula Recall</button>
      </div>

      {tab === "flashcards" && <section className="flashcard-session">
        <div className="deck-status"><span>Thẻ {(cardIndex % deck.length) + 1}/{deck.length}</span><span>{card.topic}</span></div>
        <button type="button" className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped((value) => !value)} aria-label="Lật flashcard">
          {!flipped ? <div className="flash-front"><small>Mặt trước</small><h2>{card.front}</h2><span>Nhấn để lật</span></div> : <div className="flash-back"><small>Mặt sau</small><h3>{card.definition}</h3>{card.formula && <code>{card.formula}</code>}<dl><div><dt>Trực giác</dt><dd>{card.intuition}</dd></div><div><dt>Khi dùng</dt><dd>{card.useWhen}</dd></div><div><dt>Dễ nhầm</dt><dd>{card.confusion}</dd></div></dl><SourceBadges sources={card.source} /></div>}
        </button>
        {flipped && <div className="rating-row"><button type="button" onClick={() => rate("again")}>Again<small>10 phút</small></button><button type="button" onClick={() => rate("hard")}>Hard<small>1 ngày</small></button><button type="button" onClick={() => rate("good")}>Good<small>2 ngày</small></button><button type="button" onClick={() => rate("easy")}>Easy<small>4 ngày</small></button></div>}
      </section>}

      {tab === "compare" && <section className="compare-grid">{compareCards.map(([left, right, leftNote, rightNote]) => <article key={left}><div className="compare-title"><strong>{left}</strong><ArrowLeftRight /><strong>{right}</strong></div><div className="compare-body"><p>{leftNote}</p><p>{rightNote}</p></div></article>)}</section>}

      {tab === "formula" && <section className="formula-recall">
        <div className="formula-prompt"><span>{formula.category}</span><h2>{formula.name}</h2><p>Viết công thức ra giấy hoặc nói thành tiếng trước khi mở đáp án.</p></div>
        <button type="button" className={`formula-mask ${hiddenFormula ? "hidden" : ""}`} onClick={() => setHiddenFormula((value) => !value)}>{hiddenFormula ? <><RotateCcw /><strong>Hiện công thức</strong></> : <MathBlock latex={formula.latex} />}</button>
        {!hiddenFormula && <div className="formula-recall-detail"><p><strong>Trực giác:</strong> {formula.intuition}</p><p><strong>Bẫy:</strong> {formula.pitfall}</p><SourceBadges sources={formula.source} /></div>}
        <div className="formula-nav"><button type="button" className="button secondary" onClick={() => { setCardIndex((index) => index + 1); setHiddenFormula(true); }}>Công thức tiếp theo <Check size={16} /></button></div>
      </section>}
    </div>
  );
}
