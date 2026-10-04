import { useState } from "react";
import { accuracy, f1, falsePositiveRate, formatPercent, precision, recall } from "../../utils/metrics";
import { LogisticThresholdLab } from "./ModelLabs";

export function ConfusionLab() {
  const [matrix, setMatrix] = useState({ tp: 80, tn: 890, fp: 20, fn: 10 });
  const update = (key: keyof typeof matrix, value: number) => setMatrix((current) => ({ ...current, [key]: Math.max(0,value) }));
  const metrics = { Accuracy: accuracy(matrix), Precision: precision(matrix), Recall: recall(matrix), F1: f1(matrix), FPR: falsePositiveRate(matrix) };
  return <div className="lab-body"><div className="confusion-grid"><div className="corner">Actual / Pred</div><div>Positive</div><div>Negative</div><div>Positive</div><label className="tp">TP<input type="number" value={matrix.tp} onChange={(event) => update("tp",Number(event.target.value))} /></label><label className="fn">FN<input type="number" value={matrix.fn} onChange={(event) => update("fn",Number(event.target.value))} /></label><div>Negative</div><label className="fp">FP<input type="number" value={matrix.fp} onChange={(event) => update("fp",Number(event.target.value))} /></label><label className="tn">TN<input type="number" value={matrix.tn} onChange={(event) => update("tn",Number(event.target.value))} /></label></div><div className="metric-chips large">{Object.entries(metrics).map(([name,value]) => <span key={name}>{name}<strong>{formatPercent(value)}</strong></span>)}</div></div>;
}

export function PrecisionRecallLab() {
  return <LogisticThresholdLab />;
}

const rocPoints = [{t:1,fpr:0,tpr:0},{t:.85,fpr:.05,tpr:.2},{t:.7,fpr:.1,tpr:.55},{t:.5,fpr:.25,tpr:.8},{t:.3,fpr:.5,tpr:.95},{t:0,fpr:1,tpr:1}];

export function RocLab() {
  const [index, setIndex] = useState(3);
  const point = rocPoints[index];
  const path = rocPoints.map((item,i) => `${i===0?"M":"L"} ${20+item.fpr*180} ${190-item.tpr*170}`).join(" ");
  return <div className="lab-body"><label className="field"><span>Threshold: {point.t.toFixed(2)}</span><input type="range" min="0" max={rocPoints.length-1} value={index} onChange={(event) => setIndex(Number(event.target.value))} /></label><svg className="roc-chart" viewBox="0 0 220 210"><line x1="20" y1="190" x2="200" y2="20" className="random-line"/><path d={path}/><circle cx={20+point.fpr*180} cy={190-point.tpr*170} r="6"/><text x="8" y="14">TPR</text><text x="192" y="205">FPR</text></svg><div className="metric-chips"><span>TPR / Recall <strong>{formatPercent(point.tpr)}</strong></span><span>FPR <strong>{formatPercent(point.fpr)}</strong></span><span>AUC mẫu <strong>0.82</strong></span></div><p className="lab-result">AUC mô tả ranking qua mọi threshold, không nói xác suất đã calibration tốt.</p></div>;
}

export function KFoldLab() {
  const [active, setActive] = useState(0);
  const scores = [0.78,0.82,0.8,0.84,0.81];
  const average = scores.reduce((sum,value)=>sum+value,0)/scores.length;
  return <div className="lab-body"><div className="folds">{scores.map((score,index) => <button key={index} onClick={() => setActive(index)} className={index===active?"validation":"train"}><strong>Fold {index+1}</strong><span>{index===active?"Validation":"Training"}</span><small>{index===active?`score ${score}`:"included"}</small></button>)}</div><div className="fold-controls"><button className="button primary" onClick={() => setActive((active+1)%5)}>Fold validation tiếp theo</button><p>Điểm trung bình 5 fold: <strong>{average.toFixed(3)}</strong></p></div></div>;
}

export function SplitPipelineLab() {
  const [step, setStep] = useState(0);
  const steps = ["Chia dữ liệu", "Fit preprocessing trên train", "Transform validation/test", "Train và tune", "Đánh giá test một lần"];
  return <div className="lab-body"><div className="pipeline-animation">{steps.map((item,index) => <button key={item} className={index<=step?"active":""} onClick={() => setStep(index)}><span>{index+1}</span><strong>{item}</strong></button>)}</div><p className="lab-result">Nhấn từng bước để theo dõi. Test set chỉ xuất hiện ở bước cuối.</p></div>;
}

export function RocThresholdSummaryLab() {
  const [threshold, setThreshold] = useState(0.5);
  const tpr = Math.max(0, Math.min(1, 1-threshold*0.72));
  const fpr = Math.max(0, Math.min(1, 1-threshold*1.15));
  return <div className="lab-body"><label className="field"><span>Threshold: {threshold.toFixed(2)}</span><input type="range" min="0" max="1" step="0.01" value={threshold} onChange={(event)=>setThreshold(Number(event.target.value))}/></label><div className="threshold-gauges"><div><span>Recall</span><strong>{formatPercent(tpr)}</strong><i style={{height:`${tpr*100}%`}}/></div><div><span>FPR</span><strong>{formatPercent(fpr)}</strong><i style={{height:`${fpr*100}%`}}/></div></div></div>;
}
