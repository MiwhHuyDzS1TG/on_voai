import { useMemo, useState } from "react";
import { CalendarDays, Check, Clock3 } from "lucide-react";
import { modules } from "../data/curriculum";
import { questionBank } from "../data/questions";
import { useProgress } from "../state/ProgressContext";

const weekdayLabels = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

export function StudyPlanPage() {
  const { progress, setPlan } = useProgress();
  const [examDate, setExamDate] = useState(progress.plan?.examDate ?? "2026-12-01");
  const [minutes, setMinutes] = useState(progress.plan?.minutesPerDay ?? 30);
  const [weekdays, setWeekdays] = useState<number[]>(progress.plan?.weekdays ?? [1, 2, 3, 4, 5, 6]);
  const topics = useMemo(() => [...new Set(questionBank.map((question) => question.topic))].map((topic) => ({ topic, score: progress.mastery[topic] ?? 20 })).sort((a, b) => a.score - b.score), [progress.mastery]);
  const schedule = useMemo(() => {
    const end = new Date(`${examDate}T12:00:00`);
    const cursor = new Date();
    const days: Array<{ date: Date; mode: string; topic: string }> = [];
    let index = 0;
    while (cursor <= end && days.length < 21) {
      if (weekdays.includes(cursor.getDay())) {
        const remaining = Math.ceil((end.getTime() - cursor.getTime()) / 86400000);
        const mode = remaining <= 7 ? (index % 3 === 0 ? "Mock Test" : "Mixed Review") : remaining <= 21 ? (index % 3 === 0 ? "Mistake Review" : "Practice") : (index % 3 === 0 ? "Review" : "Learn");
        days.push({ date: new Date(cursor), mode, topic: topics[index % Math.min(topics.length, 8)]?.topic ?? modules[index % modules.length].shortTitle });
        index += 1;
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return days;
  }, [examDate, weekdays, topics]);

  const save = () => setPlan({ examDate, minutesPerDay: minutes, weekdays });

  return <div className="page plan-page">
    <header className="page-header"><div><p className="eyebrow">Kế hoạch học</p><h1>Chia nhỏ quãng đường tới ngày thi.</h1><p>Ưu tiên topic yếu, tăng mixed practice, câu sai và mock test khi gần thi.</p></div></header>
    <div className="plan-layout">
      <section className="panel plan-form">
        <h2>Cấu hình</h2>
        <label className="field"><span>Ngày thi dự kiến</span><input type="date" value={examDate} min={new Date().toISOString().slice(0, 10)} onChange={(event) => setExamDate(event.target.value)} /></label>
        <label className="field"><span>Số phút mỗi ngày</span><input type="number" min="10" max="240" step="5" value={minutes} onChange={(event) => setMinutes(Number(event.target.value))} /></label>
        <fieldset><legend>Ngày có thể học</legend><div className="weekday-picker">{weekdayLabels.map((label, day) => <button type="button" className={weekdays.includes(day) ? "active" : ""} onClick={() => setWeekdays((current) => current.includes(day) ? current.filter((value) => value !== day) : [...current, day])} key={label}>{weekdays.includes(day) && <Check size={14} />}{label}</button>)}</div></fieldset>
        <button type="button" className="button primary full" disabled={!examDate || weekdays.length === 0} onClick={save}>Lưu kế hoạch</button>
      </section>
      <section className="panel plan-preview">
        <div className="section-heading"><div><h2>21 buổi tiếp theo</h2><p>Mỗi buổi {minutes} phút, tự cân lại theo mastery hiện tại.</p></div><CalendarDays /></div>
        {schedule.length === 0 ? <div className="empty-state"><CalendarDays /><p>Chọn ngày thi trong tương lai và ít nhất một ngày học.</p></div> : <div className="schedule-list">{schedule.map((item, index) => <article key={`${item.date.toISOString()}-${index}`}><time><strong>{item.date.toLocaleDateString("vi-VN", { day: "2-digit" })}</strong><span>{item.date.toLocaleDateString("vi-VN", { month: "short" })}</span></time><div><span>{item.mode}</span><strong>{item.topic}</strong></div><p><Clock3 size={15} />{minutes} phút</p></article>)}</div>}
      </section>
    </div>
  </div>;
}
