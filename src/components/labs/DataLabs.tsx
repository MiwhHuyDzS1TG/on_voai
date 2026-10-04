import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { minMax, zScore } from "../../utils/metrics";

export function ScalingLab() {
  const [value, setValue] = useState(30);
  const [method, setMethod] = useState<"minmax" | "zscore">("minmax");
  const result = method === "minmax" ? minMax(value, 10, 50) : zScore(value, 30, Math.sqrt(200));
  return <div className="lab-body"><div className="lab-controls"><label className="field"><span>Giá trị x: {value}</span><input type="range" min="10" max="50" value={value} onChange={(event) => setValue(Number(event.target.value))} /></label><div className="segmented-control small"><button className={method === "minmax" ? "active" : ""} onClick={() => setMethod("minmax")}>Min-Max</button><button className={method === "zscore" ? "active" : ""} onClick={() => setMethod("zscore")}>z-score</button></div></div><div className="scale-visual"><div><span>Trước</span><i style={{ left: `${((value - 10) / 40) * 100}%` }} /><b>10</b><b>50</b></div><div><span>Sau</span><i style={{ left: `${method === "minmax" ? result * 100 : ((result + 1.42) / 2.84) * 100}%` }} /><b>{method === "minmax" ? "0" : "-1.41"}</b><b>{method === "minmax" ? "1" : "1.41"}</b></div></div><p className="lab-result">Kết quả: <strong>{result.toFixed(3)}</strong>. Scaling đổi thước đo, không đổi thứ tự.</p></div>;
}

export function EncodingLab() {
  const [color, setColor] = useState("Đỏ");
  const colors = ["Đỏ", "Xanh", "Trắng"];
  return <div className="lab-body"><label className="field"><span>Giá trị categorical</span><select value={color} onChange={(event) => setColor(event.target.value)}>{colors.map((item) => <option key={item}>{item}</option>)}</select></label><div className="encoding-table"><div className="encoding-source"><span>Màu</span><strong>{color}</strong></div><div className="encoding-arrow">→</div>{colors.map((item) => <div className="encoding-bit" key={item}><span>is_{item}</span><strong>{color === item ? 1 : 0}</strong></div>)}</div><p className="lab-result">One-hot không tạo quan hệ giả như Đỏ &lt; Xanh &lt; Trắng.</p></div>;
}

export function SplitLab() {
  const [train, setTrain] = useState(70);
  const [validation, setValidation] = useState(15);
  const test = 100 - train - validation;
  const valid = test >= 5;
  return <div className="lab-body"><div className="split-controls"><label className="field"><span>Train {train}%</span><input type="range" min="50" max="85" value={train} onChange={(event) => setTrain(Number(event.target.value))} /></label><label className="field"><span>Validation {validation}%</span><input type="range" min="5" max="30" value={validation} onChange={(event) => setValidation(Number(event.target.value))} /></label></div><div className={`split-bar ${valid ? "" : "invalid"}`}><span style={{ width: `${train}%` }} title="Train">Train</span><span style={{ width: `${validation}%` }} title="Validation">{validation < 10 ? "V" : "Val"}</span><span style={{ width: `${Math.max(0, test)}%` }} title="Test">{test < 10 ? "T" : "Test"}</span></div><p className="lab-result">{valid ? `1.000 mẫu: ${train * 10} train, ${validation * 10} validation, ${test * 10} test.` : "Hãy giữ ít nhất 5% cho test."} 70/15/15 chỉ là một ví dụ phổ biến.</p></div>;
}

const leakageScenarios = [
  { text: "Split dữ liệu, fit scaler trên train, transform validation bằng scaler đó.", leak: false, why: "Đúng pipeline. Validation không ảnh hưởng thống kê của scaler." },
  { text: "Điền missing bằng mean toàn bộ dataset rồi mới split.", leak: true, why: "Mean của validation/test đã chảy vào training." },
  { text: "Dự đoán churn bằng trường lý do hủy được nhập sau khi khách hủy.", leak: true, why: "Đây là target leakage." },
  { text: "Dự đoán giá nhà bằng diện tích đo trước khi rao bán.", leak: false, why: "Feature predictive hợp lệ và có sẵn lúc dự đoán." },
  { text: "Random split giá cổ phiếu theo ngày để dự đoán tương lai.", leak: true, why: "Tương lai có thể lọt vào train, gây temporal leakage." },
];

export function LeakageLab() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<boolean | null>(null);
  const scenario = leakageScenarios[index];
  const correct = choice === scenario.leak;
  return <div className="lab-body leakage-game"><div className="scenario-card"><span>Tình huống {index + 1}/{leakageScenarios.length}</span><h3>{scenario.text}</h3></div><div className="binary-actions"><button onClick={() => setChoice(true)} className={choice === true ? "active" : ""}>Leak</button><button onClick={() => setChoice(false)} className={choice === false ? "active" : ""}>Không leak</button></div>{choice !== null && <div className={`feedback ${correct ? "correct" : "incorrect"}`}><strong>{correct ? <Check size={18} /> : <X size={18} />}{correct ? "Chính xác" : "Xem lại"}</strong><p>{scenario.why}</p><button className="text-button" onClick={() => { setIndex((index + 1) % leakageScenarios.length); setChoice(null); }}>Tình huống tiếp theo</button></div>}</div>;
}

export function PCALab() {
  const [angle, setAngle] = useState(35);
  const points = useMemo(() => [[25, 80], [45, 68], [65, 54], [85, 43], [105, 28], [58, 62]], []);
  const radians = angle * Math.PI / 180;
  const direction = { x: Math.cos(radians), y: -Math.sin(radians) };
  return <div className="lab-body"><label className="field"><span>Góc trục chiếu: {angle}°</span><input type="range" min="0" max="90" value={angle} onChange={(event) => setAngle(Number(event.target.value))} /></label><svg className="pca-chart" viewBox="0 0 140 110" role="img" aria-label="Các điểm và principal axis"><line x1={70 - direction.x * 65} y1={55 - direction.y * 65} x2={70 + direction.x * 65} y2={55 + direction.y * 65} className="principal-axis" />{points.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="4" />)}</svg><p className="lab-result">PCA tìm hướng giữ variance lớn. Trục phù hợp nhất chạy dọc theo đám mây điểm, không nhất thiết trùng trục x hoặc y.</p></div>;
}

export function KMeansLab() {
  const points = [[20, 30], [26, 38], [33, 28], [92, 70], [104, 78], [96, 87]];
  const [centroids, setCentroids] = useState([[35, 75], [82, 35]]);
  const [step, setStep] = useState(0);
  const assign = (point: number[]) => {
    const distances = centroids.map((centroid) => Math.hypot(point[0] - centroid[0], point[1] - centroid[1]));
    return distances[0] <= distances[1] ? 0 : 1;
  };
  const iterate = () => {
    const next = [0, 1].map((cluster) => {
      const members = points.filter((point) => assign(point) === cluster);
      return [members.reduce((sum, point) => sum + point[0], 0) / members.length, members.reduce((sum, point) => sum + point[1], 0) / members.length];
    });
    setCentroids(next);
    setStep((value) => value + 1);
  };
  return <div className="lab-body"><svg className="kmeans-chart" viewBox="0 0 125 105" role="img" aria-label="K-means points and centroids">{points.map((point, index) => <circle key={index} cx={point[0]} cy={point[1]} r="4" className={`cluster-${assign(point)}`} />)}{centroids.map((point, index) => <g key={index} className={`centroid cluster-${index}`}><line x1={point[0]-5} y1={point[1]-5} x2={point[0]+5} y2={point[1]+5} /><line x1={point[0]+5} y1={point[1]-5} x2={point[0]-5} y2={point[1]+5} /></g>)}</svg><div className="lab-bottom"><p>Đã chạy {step} vòng assignment và update.</p><button className="button primary" onClick={iterate}>Chạy một vòng</button><button className="button ghost" onClick={() => { setCentroids([[35,75],[82,35]]); setStep(0); }}>Khởi tạo lại</button></div></div>;
}
