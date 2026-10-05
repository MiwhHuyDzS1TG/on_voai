import { useMemo, useState } from "react";
import { bayesPosterior, entropy, informationGain, sigmoid } from "../../utils/metrics";

export function LinearRegressionLab() {
  const [x, setX] = useState(4);
  const [w, setW] = useState(1.5);
  const [b, setB] = useState(1);
  const y = w * x + b;
  const line = { x1: 10, y1: 100 - b * 7, x2: 130, y2: 100 - (w * 9 + b) * 7 };
  return <div className="lab-body"><div className="triple-controls"><label className="field"><span>x={x}</span><input type="range" min="0" max="9" step="0.5" value={x} onChange={(event) => setX(Number(event.target.value))} /></label><label className="field"><span>w={w}</span><input type="range" min="-2" max="3" step="0.1" value={w} onChange={(event) => setW(Number(event.target.value))} /></label><label className="field"><span>b={b}</span><input type="range" min="-2" max="5" step="0.5" value={b} onChange={(event) => setB(Number(event.target.value))} /></label></div><svg className="linear-chart" viewBox="0 0 140 110"><line {...line} /><circle cx={10 + x * 13.3} cy={100 - y * 7} r="5" /></svg><p className="lab-result">ŷ = {w} x {x} + {b} = <strong>{y.toFixed(2)}</strong></p></div>;
}

const scoredItems = [
  { score: 0.92, positive: true }, { score: 0.84, positive: false }, { score: 0.76, positive: true }, { score: 0.66, positive: true },
  { score: 0.58, positive: false }, { score: 0.47, positive: true }, { score: 0.39, positive: false }, { score: 0.28, positive: false },
  { score: 0.18, positive: true }, { score: 0.08, positive: false },
];

export function LogisticThresholdLab({ compact = false }: { compact?: boolean }) {
  const [threshold, setThreshold] = useState(0.5);
  const counts = useMemo(() => scoredItems.reduce((acc, item) => {
    const predicted = item.score >= threshold;
    if (predicted && item.positive) acc.tp += 1;
    else if (predicted) acc.fp += 1;
    else if (item.positive) acc.fn += 1;
    else acc.tn += 1;
    return acc;
  }, { tp: 0, fp: 0, tn: 0, fn: 0 }), [threshold]);
  const precision = counts.tp / Math.max(1, counts.tp + counts.fp);
  const recall = counts.tp / Math.max(1, counts.tp + counts.fn);
  return <div className="lab-body"><label className="field"><span>Threshold: {threshold.toFixed(2)}</span><input type="range" min="0" max="1" step="0.02" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} /></label><div className="score-strip">{scoredItems.map((item, index) => <div key={index} className={`${item.positive ? "actual-positive" : "actual-negative"} ${item.score >= threshold ? "predicted-positive" : ""}`} style={{ left: `${item.score * 100}%` }}><span>{item.score}</span></div>)}<i style={{ left: `${threshold * 100}%` }} /></div><div className="metric-chips"><span>TP <strong>{counts.tp}</strong></span><span>FP <strong>{counts.fp}</strong></span><span>FN <strong>{counts.fn}</strong></span><span>TN <strong>{counts.tn}</strong></span>{compact ? null : <><span>Precision <strong>{(precision * 100).toFixed(0)}%</strong></span><span>Recall <strong>{(recall * 100).toFixed(0)}%</strong></span></>}</div><p className="lab-result">Ngưỡng cao hơn làm ít sample được dự đoán dương tính hơn.</p></div>;
}

export function EntropyLab() {
  const [positive, setPositive] = useState(5);
  const [negative, setNegative] = useState(5);
  const [leftPositive, setLeftPositive] = useState(4);
  const leftNegative = 1;
  const rightPositive = Math.max(0, positive - leftPositive);
  const rightNegative = Math.max(0, negative - leftNegative);
  const h = entropy([positive, negative]);
  const gain = informationGain([positive, negative], [[leftPositive, leftNegative], [rightPositive, rightNegative]]);
  return <div className="lab-body"><div className="triple-controls"><label className="field"><span>Positive {positive}</span><input type="range" min="1" max="10" value={positive} onChange={(event) => { const value=Number(event.target.value); setPositive(value); setLeftPositive(Math.min(leftPositive, value)); }} /></label><label className="field"><span>Negative {negative}</span><input type="range" min="1" max="10" value={negative} onChange={(event) => setNegative(Number(event.target.value))} /></label><label className="field"><span>Positive nhánh trái {leftPositive}</span><input type="range" min="0" max={positive} value={leftPositive} onChange={(event) => setLeftPositive(Number(event.target.value))} /></label></div><div className="entropy-visual"><div><span>Parent</span><strong>H={h.toFixed(3)}</strong></div><b>→</b><div><span>Left ({leftPositive}+, {leftNegative}-)</span><strong>H={entropy([leftPositive,leftNegative]).toFixed(3)}</strong></div><div><span>Right ({rightPositive}+, {rightNegative}-)</span><strong>H={entropy([rightPositive,rightNegative]).toFixed(3)}</strong></div></div><p className="lab-result">Information Gain = <strong>{gain.toFixed(3)}</strong></p></div>;
}

export function BayesLab() {
  const [prior, setPrior] = useState(0.1);
  const [likelihood, setLikelihood] = useState(0.8);
  const [evidence, setEvidence] = useState(0.2);
  const posterior = Math.min(1, bayesPosterior(prior, likelihood, evidence));
  return <div className="lab-body"><div className="triple-controls"><label className="field"><span>Prior P(y): {prior.toFixed(2)}</span><input type="range" min="0.01" max="0.5" step="0.01" value={prior} onChange={(event) => setPrior(Number(event.target.value))} /></label><label className="field"><span>Likelihood P(x|y): {likelihood.toFixed(2)}</span><input type="range" min="0.05" max="1" step="0.05" value={likelihood} onChange={(event) => setLikelihood(Number(event.target.value))} /></label><label className="field"><span>Evidence P(x): {evidence.toFixed(2)}</span><input type="range" min="0.05" max="1" step="0.05" value={evidence} onChange={(event) => setEvidence(Number(event.target.value))} /></label></div><div className="bayes-equation"><span>{likelihood.toFixed(2)}</span><b>×</b><span>{prior.toFixed(2)}</span><b>÷</b><span>{evidence.toFixed(2)}</span><b>=</b><strong>{posterior.toFixed(3)}</strong></div><p className="lab-result">Nếu kết quả vượt 1, ba xác suất nhập vào không nhất quán; lab giới hạn hiển thị ở 1.</p></div>;
}

const knnPoints = [
  { x: 18, y: 24, label: "A" }, { x: 28, y: 36, label: "A" }, { x: 34, y: 18, label: "A" },
  { x: 68, y: 72, label: "B" }, { x: 78, y: 58, label: "B" }, { x: 62, y: 48, label: "B" },
];

export function KNNLab() {
  const [k, setK] = useState(3);
  const [testX, setTestX] = useState(50);
  const [testY, setTestY] = useState(45);
  const [scaled, setScaled] = useState(false);
  const distances = useMemo(() => knnPoints.map((point) => {
    const dx = scaled ? (point.x - testX) / 100 : point.x - testX;
    const dy = scaled ? (point.y - testY) / 20 : point.y - testY;
    return { ...point, distance: Math.sqrt(dx * dx + dy * dy) };
  }).sort((a, b) => a.distance - b.distance), [scaled, testX, testY]);
  const neighbors = distances.slice(0, k);
  const votes = neighbors.reduce((items, point) => ({ ...items, [point.label]: (items[point.label] ?? 0) + 1 }), {} as Record<string, number>);
  const prediction = (votes.A ?? 0) >= (votes.B ?? 0) ? "A" : "B";
  return <div className="lab-body"><div className="triple-controls"><label className="field"><span>k = {k}</span><input type="range" min="1" max="5" step="2" value={k} onChange={(event) => setK(Number(event.target.value))} /></label><label className="field"><span>Test x = {testX}</span><input type="range" min="5" max="95" value={testX} onChange={(event) => setTestX(Number(event.target.value))} /></label><label className="field"><span>Test y = {testY}</span><input type="range" min="5" max="95" value={testY} onChange={(event) => setTestY(Number(event.target.value))} /></label></div><label className="toggle-control"><input type="checkbox" checked={scaled} onChange={(event) => setScaled(event.target.checked)} />Chuẩn hóa hai trục trước khi tính distance</label><svg className="knn-chart" viewBox="0 0 100 100" role="img" aria-label="Các điểm KNN và test point">{knnPoints.map((point, index) => { const neighbor = neighbors.some((item) => item.x === point.x && item.y === point.y); return <g key={index}><circle className={`knn-point class-${point.label.toLowerCase()} ${neighbor ? "neighbor" : ""}`} cx={point.x} cy={100-point.y} r={neighbor ? 5 : 3.5} /><text x={point.x+3} y={97-point.y}>{point.label}</text></g>; })}<circle className="knn-test" cx={testX} cy={100-testY} r="5" /></svg><div className="lab-table"><div><strong>Hàng xóm</strong><strong>Distance</strong></div>{neighbors.map((point, index) => <div key={`${point.x}-${point.y}`}><span>{index+1}. Class {point.label} ({point.x}, {point.y})</span><code>{point.distance.toFixed(3)}</code></div>)}</div><p className="lab-result">Vote A={votes.A ?? 0}, B={votes.B ?? 0}. Dự đoán: <strong>Class {prediction}</strong></p></div>;
}

export function GradientDescentLab() {
  const [x, setX] = useState(4);
  const [learningRate, setLearningRate] = useState(.2);
  const gradient = 2 * x;
  const next = x - learningRate * gradient;
  const region = learningRate < .1 ? "Học chậm" : learningRate <= .6 ? "Hội tụ" : "Dao động hoặc phân kỳ";
  const step = () => setX(Math.abs(next) < .001 ? 0 : Number(next.toFixed(4)));
  return <div className="lab-body"><div className="split-controls"><label className="field"><span>x hiện tại = {x.toFixed(3)}</span><input type="range" min="-5" max="5" step=".1" value={x} onChange={(event) => setX(Number(event.target.value))} /></label><label className="field"><span>Learning rate η = {learningRate.toFixed(2)}</span><input type="range" min=".02" max="1.1" step=".02" value={learningRate} onChange={(event) => setLearningRate(Number(event.target.value))} /></label></div><svg className="gradient-chart" viewBox="0 0 240 130"><path d="M10 10 Q120 220 230 10" /><line x1={120+x*20} y1={115-Math.min(100,x*x*4)} x2={120+next*20} y2={115-Math.min(100,next*next*4)} /><circle cx={120+x*20} cy={115-Math.min(100,x*x*4)} r="5" /></svg><div className="gradient-equation"><span>gradient = 2x = {gradient.toFixed(3)}</span><span>x mới = {x.toFixed(3)} - {learningRate.toFixed(2)} × {gradient.toFixed(3)} = <strong>{next.toFixed(3)}</strong></span></div><div className="lab-actions"><button type="button" className="button primary" onClick={step}>Chạy một update</button><button type="button" className="button ghost" onClick={() => setX(4)}>Đặt lại</button></div><p className="lab-result">Chẩn đoán learning rate: <strong>{region}</strong></p></div>;
}

export function BiasVarianceLab() {
  const [complexity, setComplexity] = useState(50);
  const train = Math.max(5, 82 - complexity * 0.72);
  const validation = 25 + Math.abs(complexity - 52) * 0.85;
  const region = complexity < 35 ? "Underfit" : complexity > 70 ? "Overfit" : "Vùng tốt";
  return <div className="lab-body"><label className="field"><span>Model complexity: {complexity}</span><input type="range" min="0" max="100" value={complexity} onChange={(event) => setComplexity(Number(event.target.value))} /></label><svg className="bias-chart" viewBox="0 0 240 125"><path d="M10 18 C70 45 150 78 230 104" className="train-curve" /><path d="M10 28 C80 93 135 93 230 25" className="validation-curve" /><line x1={10 + complexity * 2.2} y1="8" x2={10 + complexity * 2.2} y2="112" /><text x="15" y="18">error</text><text x="172" y="119">complexity</text></svg><div className="metric-chips"><span>Train error <strong>{train.toFixed(0)}%</strong></span><span>Validation error <strong>{validation.toFixed(0)}%</strong></span><span>Chẩn đoán <strong>{region}</strong></span></div></div>;
}

export function SigmoidQuickLab() {
  const [z, setZ] = useState(0);
  return <div className="lab-body"><label className="field"><span>Logit z: {z.toFixed(1)}</span><input type="range" min="-6" max="6" step="0.1" value={z} onChange={(event) => setZ(Number(event.target.value))} /></label><p className="large-output">σ(z) = {sigmoid(z).toFixed(4)}</p></div>;
}
