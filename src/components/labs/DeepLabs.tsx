import { useMemo, useState } from "react";
import { sigmoid } from "../../utils/metrics";

export function NeuronLab() {
  const [x1, setX1] = useState(2);
  const [x2, setX2] = useState(1);
  const [w1, setW1] = useState(0.5);
  const [w2, setW2] = useState(-1);
  const [bias, setBias] = useState(0.2);
  const z = x1*w1+x2*w2+bias;
  return <div className="lab-body"><div className="neuron-layout"><div className="neuron-inputs"><label>x₁<input type="number" step="0.1" value={x1} onChange={(event) => setX1(Number(event.target.value))} /></label><label>x₂<input type="number" step="0.1" value={x2} onChange={(event) => setX2(Number(event.target.value))} /></label></div><div className="neuron-weights"><label>w₁<input type="number" step="0.1" value={w1} onChange={(event) => setW1(Number(event.target.value))} /></label><label>w₂<input type="number" step="0.1" value={w2} onChange={(event) => setW2(Number(event.target.value))} /></label></div><div className="neuron-node"><span>Σ + b</span><strong>{z.toFixed(2)}</strong></div><div className="neuron-output"><span>ReLU</span><strong>{Math.max(0,z).toFixed(2)}</strong></div></div><label className="field"><span>Bias: {bias}</span><input type="range" min="-2" max="2" step="0.1" value={bias} onChange={(event) => setBias(Number(event.target.value))} /></label><p className="lab-result">z = {x1}×{w1} + {x2}×{w2} + {bias} = {z.toFixed(2)}</p></div>;
}

export function ActivationLab() {
  const [z, setZ] = useState(0);
  const functions = [
    { name: "ReLU", value: Math.max(0,z) },
    { name: "Tanh", value: Math.tanh(z) },
    { name: "Sigmoid", value: sigmoid(z) },
    { name: "Softmax 2 lớp", value: Math.exp(z)/(Math.exp(z)+1) },
  ];
  return <div className="lab-body"><label className="field"><span>z = {z.toFixed(1)}</span><input type="range" min="-6" max="6" step="0.1" value={z} onChange={(event) => setZ(Number(event.target.value))} /></label><div className="activation-grid">{functions.map((item) => <div key={item.name}><span>{item.name}</span><strong>{item.value.toFixed(4)}</strong><i style={{ height: `${Math.min(100, Math.abs(item.value) * 100)}%` }} /></div>)}</div><p className="lab-result">Kéo z ra xa 0 để thấy sigmoid và tanh bão hòa; output đổi rất ít dù input tiếp tục tăng.</p></div>;
}

const image = [
  [0,0,1,0,0], [0,1,1,1,0], [1,1,1,1,1], [0,1,1,1,0], [0,0,1,0,0],
];
const kernel = [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]];

export function CNNLab() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const products = useMemo(() => kernel.flatMap((line, r) => line.map((weight, c) => weight * image[row+r][col+c])), [row,col]);
  const result = products.reduce((sum,value) => sum+value,0);
  return <div className="lab-body cnn-demo"><div><h4>Ảnh 5x5</h4><div className="matrix image-matrix">{image.flatMap((line,r) => line.map((value,c) => <button key={`${r}-${c}`} className={r>=row&&r<row+3&&c>=col&&c<col+3 ? "active" : ""} onClick={() => { setRow(Math.min(2,r)); setCol(Math.min(2,c)); }}>{value}</button>))}</div></div><div><h4>Kernel 3x3</h4><div className="matrix kernel-matrix">{kernel.flat().map((value,index) => <span key={index}>{value}</span>)}</div></div><div className="conv-result"><span>Tích từng ô</span><code>{products.join(" + ")}</code><strong>= {result}</strong></div><p>Chọn một ô trong ảnh để di chuyển góc trên-trái của kernel. Cùng bộ weight được dùng ở mọi vị trí.</p></div>;
}
