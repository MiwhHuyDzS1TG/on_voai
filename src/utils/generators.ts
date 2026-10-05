import type { Question } from "../types";
import { accuracy, entropy, f1, falsePositiveRate, mae, mse, precision, recall, rmse, sigmoid } from "./metrics";

const integer = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const round = (value: number, digits = 3): number => Number(value.toFixed(digits));

export const generateConfusionQuestion = (): Question => {
  const matrix = { tp: integer(10, 80), tn: integer(20, 120), fp: integer(2, 25), fn: integer(2, 25) };
  const metrics = [
    ["Accuracy", accuracy(matrix)],
    ["Precision", precision(matrix)],
    ["Recall", recall(matrix)],
    ["F1", f1(matrix)],
    ["FPR", falsePositiveRate(matrix)],
  ] as const;
  const [name, answer] = metrics[integer(0, metrics.length - 1)];
  return {
    id: `gen-confusion-${Date.now()}-${name}`,
    module: "m4",
    topic: "Classification metrics",
    subtopic: name,
    difficulty: "medium",
    type: "numeric",
    prompt: `TP=${matrix.tp}, TN=${matrix.tn}, FP=${matrix.fp}, FN=${matrix.fn}. Tính ${name}, nhập dạng thập phân.`,
    answer: round(answer),
    tolerance: 0.005,
    explanation: `${name} được tính trực tiếp từ confusion matrix. Kết quả xấp xỉ ${round(answer)}.`,
    hints: ["Xác định đúng denominator.", `${name} dùng các ô liên quan trong confusion matrix.`, `Kết quả gần ${round(answer, 2)}.`],
    source: ["VAIO §4.2", "IAIO Ch.5"],
    misconceptionTags: ["precision-vs-recall"],
  };
};

export const generateRegressionMetricQuestion = (): Question => {
  const actual = Array.from({ length: 4 }, () => integer(2, 15));
  const predicted = actual.map((value) => value + integer(-4, 4));
  const options = [
    ["MAE", mae(actual, predicted)],
    ["MSE", mse(actual, predicted)],
    ["RMSE", rmse(actual, predicted)],
  ] as const;
  const [name, answer] = options[integer(0, options.length - 1)];
  return {
    id: `gen-reg-${Date.now()}-${name}`,
    module: "m4",
    topic: "Regression metrics",
    subtopic: name,
    difficulty: "medium",
    type: "numeric",
    prompt: `y=[${actual.join(", ")}], ŷ=[${predicted.join(", ")}]. Tính ${name}.`,
    answer: round(answer),
    tolerance: 0.01,
    explanation: `Tính residual từng cặp rồi áp dụng công thức ${name}. Kết quả xấp xỉ ${round(answer)}.`,
    hints: ["Bắt đầu từ từng residual.", name === "MAE" ? "Lấy trị tuyệt đối." : "Bình phương residual.", `Kết quả gần ${round(answer, 1)}.`],
    source: ["VAIO §4.1", "IAIO Ch.5"],
    misconceptionTags: ["mae-vs-mse"],
  };
};

export const generateSigmoidQuestion = (): Question => {
  const z = integer(-30, 30) / 10;
  const answer = sigmoid(z);
  return {
    id: `gen-sigmoid-${Date.now()}`,
    module: "m2",
    topic: "Activation Functions",
    subtopic: "Sigmoid",
    difficulty: "medium",
    type: "numeric",
    prompt: `Tính sigmoid(${z}). Làm tròn 3 chữ số thập phân.`,
    answer: round(answer),
    tolerance: 0.002,
    explanation: `σ(z)=1/(1+e^-z), kết quả xấp xỉ ${round(answer)}.`,
    hints: ["Dùng 1/(1+e^-z).", "Kiểm tra dấu trong số mũ.", `Đáp án nằm ${z >= 0 ? "trên" : "dưới"} 0.5.`],
    source: ["VAIO §2.2", "VAIO §1.2", "IAIO Ch.4"],
    misconceptionTags: ["sigmoid"],
  };
};

export const generateEntropyQuestion = (): Question => {
  const positive = integer(1, 9);
  const negative = integer(1, 9);
  const answer = entropy([positive, negative]);
  return {
    id: `gen-entropy-${Date.now()}`,
    module: "m1",
    topic: "Decision Tree",
    subtopic: "Entropy",
    difficulty: "hard",
    type: "numeric",
    prompt: `Một node có ${positive} mẫu dương và ${negative} mẫu âm. Tính entropy theo log2.`,
    answer: round(answer),
    tolerance: 0.005,
    explanation: `Thay p+ và p- vào H=-Σp log2(p), được ${round(answer)}.`,
    hints: ["Tính tổng mẫu trước.", "Đổi counts thành tỷ lệ.", `Kết quả gần ${round(answer, 1)}.`],
    source: ["VAIO §1.2", "IAIO Ch.4"],
    misconceptionTags: ["entropy"],
  };
};

export const generateMeanQuestion = (): Question => {
  const values = Array.from({ length: 5 }, () => integer(2, 20));
  const total = values.reduce((sum, value) => sum + value, 0);
  const answer = total / values.length;
  return { id: `gen-mean-${Date.now()}`, module: "m3", lessonId: "data-quality", topic: "Data quality and statistics", subtopic: "Mean", difficulty: "easy", type: "numeric", prompt: `Tính mean của [${values.join(", ")}].`, answer: round(answer), tolerance: .001, explanation: `Cộng được ${total}, rồi chia ${values.length}: mean=${round(answer)}.`, hints: ["Dùng thống kê trung tâm nào?", "Mean = tổng / số phần tử.", `Tổng các giá trị là ${total}.`], source: ["VAIO v2 §3.1"], misconceptionTags: ["mean"] };
};

export const generateMinMaxQuestion = (): Question => {
  const min = integer(0, 10);
  const max = min + integer(8, 25);
  const value = integer(min, max);
  const answer = (value - min) / (max - min);
  return { id: `gen-minmax-${Date.now()}`, module: "m3", lessonId: "scaling-encoding", topic: "Scaling and encoding", subtopic: "Min-Max", difficulty: "medium", type: "numeric", prompt: `Training min=${min}, max=${max}. Tính Min-Max của x=${value}.`, answer: round(answer), tolerance: .002, explanation: `(x-min)/(max-min)=(${value}-${min})/(${max}-${min})=${round(answer)}.`, hints: ["Dùng scaling nào?", "x'=(x-min)/(max-min).", `Mẫu số là ${max - min}.`], source: ["VAIO v2 §3.2"], misconceptionTags: ["min-max"] };
};

export const generateZScoreQuestion = (): Question => {
  const mean = integer(5, 20);
  const std = integer(2, 6);
  const factor = integer(-3, 3);
  const value = mean + factor * std;
  return { id: `gen-zscore-${Date.now()}`, module: "m3", lessonId: "scaling-encoding", topic: "Scaling and encoding", subtopic: "Z-score", difficulty: "medium", type: "numeric", prompt: `Training mean=${mean}, standard deviation=${std}. Tính z-score của x=${value}.`, answer: factor, tolerance: .001, explanation: `z=(x-mean)/std=(${value}-${mean})/${std}=${factor}.`, hints: ["Đo số độ lệch chuẩn so với mean.", "z=(x-μ)/σ.", `Hiệu x-mean là ${value - mean}.`], source: ["VAIO v2 §3.2"], misconceptionTags: ["z-score"] };
};

export const generateDistanceQuestion = (): Question => {
  const x = [integer(0, 6), integer(0, 6)];
  const y = [integer(0, 6), integer(0, 6)];
  const squared = (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2;
  const answer = Math.sqrt(squared);
  return { id: `gen-distance-${Date.now()}`, module: "m1", lessonId: "supervised", topic: "Supervised learning", subtopic: "Euclidean distance", difficulty: "medium", type: "numeric", prompt: `Tính Euclidean distance giữa (${x.join(",")}) và (${y.join(",")}).`, answer: round(answer), tolerance: .005, explanation: `d=√((${x[0]}-${y[0]})²+(${x[1]}-${y[1]})²)=√${squared}≈${round(answer)}.`, hints: ["Tính chênh lệch từng tọa độ.", "Bình phương, cộng rồi lấy căn.", `Tổng bình phương là ${squared}.`], source: ["VAIO v2 §1.2"], misconceptionTags: ["euclidean-distance"] };
};

export const generateLinearPredictionQuestion = (): Question => {
  const w = integer(-4, 5);
  const x = integer(-3, 7);
  const b = integer(-5, 5);
  const answer = w * x + b;
  return { id: `gen-linear-${Date.now()}`, module: "m1", lessonId: "supervised", topic: "Supervised learning", subtopic: "Linear Regression", difficulty: "medium", type: "numeric", prompt: `Với ŷ=wx+b, w=${w}, x=${x}, b=${b}. Tính ŷ.`, answer, tolerance: .001, explanation: `ŷ=${w}×${x}+(${b})=${answer}.`, hints: ["Dùng mô hình tuyến tính.", "Nhân w với x trước.", `wx=${w * x}.`], source: ["VAIO v2 §1.2"], misconceptionTags: ["linear-regression"] };
};

export const generateNeuronQuestion = (): Question => {
  const x = [integer(-3, 4), integer(-3, 4)];
  const w = [integer(-2, 3), integer(-2, 3)];
  const b = integer(-3, 3);
  const z = w[0] * x[0] + w[1] * x[1] + b;
  const answer = Math.max(0, z);
  return { id: `gen-neuron-${Date.now()}`, module: "m2", lessonId: "neuron-network", topic: "Neural network", subtopic: "Neuron output", difficulty: "medium", type: "numeric", prompt: `x=[${x}], w=[${w}], b=${b}. Tính output ReLU của neuron.`, answer, tolerance: .001, explanation: `z=${w[0]}×${x[0]}+${w[1]}×${x[1]}+(${b})=${z}; ReLU(z)=max(0,${z})=${answer}.`, hints: ["Tính weighted sum trước.", "z=wᵀx+b.", `Pre-activation z=${z}.`], source: ["VAIO v2 §2.1", "VAIO v2 §2.2"], misconceptionTags: ["neuron-output"] };
};

export const generateFCParametersQuestion = (): Question => {
  const input = integer(2, 12);
  const output = integer(2, 10);
  const answer = (input + 1) * output;
  return { id: `gen-fc-${Date.now()}`, module: "m2", lessonId: "neuron-network", topic: "Neural network", subtopic: "FC parameters", difficulty: "medium", type: "numeric", prompt: `Fully connected layer có ${input} input và ${output} neuron. Mỗi neuron có một bias. Tính số parameter.`, answer, tolerance: .001, explanation: `Weights=${input}×${output}=${input * output}; biases=${output}; tổng=${answer}.`, hints: ["Đếm weight và bias.", "(n_in+1)n_out.", `Có ${output} bias.`], source: ["VAIO v2 §2.1"], misconceptionTags: ["parameter-count"] };
};

export const generateConvDimensionQuestion = (): Question => {
  const input = integer(5, 16);
  const kernel = [2, 3][integer(0, 1)];
  const stride = [1, 2][integer(0, 1)];
  const padding = integer(0, 1);
  const answer = Math.floor((input + 2 * padding - kernel) / stride) + 1;
  return { id: `gen-conv-dim-${Date.now()}`, module: "m2", lessonId: "cnn", topic: "CNN", subtopic: "Output dimensions", difficulty: "hard", type: "numeric", prompt: `Một chiều input H=${input}, kernel K=${kernel}, stride S=${stride}, padding P=${padding}. Tính H_out.`, answer, tolerance: .001, explanation: `H_out=floor((${input}+2×${padding}-${kernel})/${stride})+1=${answer}.`, hints: ["Dùng công thức output convolution.", "floor((H+2P-K)/S)+1.", `Tử số trước chia là ${input + 2 * padding - kernel}.`], source: ["VAIO v2 §2.4"], misconceptionTags: ["cnn-dimension"] };
};

export const generateCNNParametersQuestion = (): Question => {
  const kernel = [2, 3, 5][integer(0, 2)];
  const cin = [1, 3, 8][integer(0, 2)];
  const cout = [4, 8, 16][integer(0, 2)];
  const answer = (kernel * kernel * cin + 1) * cout;
  return { id: `gen-cnn-param-${Date.now()}`, module: "m2", lessonId: "cnn", topic: "CNN", subtopic: "Parameter count", difficulty: "hard", type: "numeric", prompt: `Conv chuẩn dùng kernel ${kernel}×${kernel}, C_in=${cin}, C_out=${cout}, một bias mỗi output channel. Tính parameters.`, answer, tolerance: .001, explanation: `(${kernel}×${kernel}×${cin}+1)×${cout}=${answer}. Không nhân với H_out×W_out vì weight sharing.`, hints: ["Đếm weight của một filter.", "(K_hK_wC_in+1)C_out.", `Mỗi filter có ${kernel * kernel * cin} weight.`], source: ["VAIO v2 §2.4"], misconceptionTags: ["cnn-parameter-count"] };
};

export const generateCentroidQuestion = (): Question => {
  const points = [[integer(0, 8), integer(0, 8)], [integer(0, 8), integer(0, 8)], [integer(0, 8), integer(0, 8)]];
  const answer = points.reduce((sum, point) => sum + point[0], 0) / points.length;
  const yMean = points.reduce((sum, point) => sum + point[1], 0) / points.length;
  return { id: `gen-centroid-${Date.now()}`, module: "m1", lessonId: "unsupervised", topic: "Unsupervised learning", subtopic: "Centroid update", difficulty: "hard", type: "numeric", prompt: `Một cụm có các điểm ${points.map((point) => `(${point})`).join(", ")}. Tính tọa độ x của centroid mới.`, answer: round(answer), tolerance: .005, explanation: `x̄=(${points.map((point) => point[0]).join("+")})/3=${round(answer)}. Centroid đầy đủ là (${round(answer)}, ${round(yMean)}).`, hints: ["Centroid là mean theo từng tọa độ.", "Chỉ cần tính tọa độ x.", `Cộng các x rồi chia ${points.length}.`], source: ["VAIO v2 §1.3"], misconceptionTags: ["kmeans-update"] };
};

export const generateF1Question = (): Question => {
  const tp = integer(10, 80);
  const fp = integer(2, 25);
  const fn = integer(2, 25);
  const p = tp / (tp + fp);
  const r = tp / (tp + fn);
  const answer = 2 * p * r / (p + r);
  return { id: `gen-f1-${Date.now()}`, module: "m4", lessonId: "classification-metrics", topic: "Classification metrics", subtopic: "F1", difficulty: "hard", type: "numeric", prompt: `TP=${tp}, FP=${fp}, FN=${fn}. Tính F1, nhập số thập phân.`, answer: round(answer), tolerance: .005, explanation: `Precision=${round(p)}, Recall=${round(r)}; F1=2PR/(P+R)≈${round(answer)}.`, hints: ["Cần hai metric nào?", "Tính Precision và Recall trước.", `P≈${round(p, 2)}, R≈${round(r, 2)}.`], source: ["VAIO v2 §4.2"], misconceptionTags: ["f1"] };
};

export const generateKFoldAverageQuestion = (): Question => {
  const scores = Array.from({ length: 5 }, () => integer(65, 95) / 100);
  const answer = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return { id: `gen-kfold-${Date.now()}`, module: "m4", lessonId: "validation-tuning", topic: "Cross-validation", subtopic: "K-fold average", difficulty: "medium", type: "numeric", prompt: `5 fold có score [${scores.join(", ")}]. Tính score trung bình.`, answer: round(answer), tolerance: .002, explanation: `Cộng 5 score rồi chia 5, được ${round(answer)}.`, hints: ["Đây là phép tổng hợp nào?", "Mean = tổng / K.", `K=${scores.length}.`], source: ["VAIO v2 §4.3"], misconceptionTags: ["kfold-average"] };
};

export const generatedQuestionFactories = [
  generateConfusionQuestion,
  generateRegressionMetricQuestion,
  generateSigmoidQuestion,
  generateEntropyQuestion,
  generateMeanQuestion,
  generateMinMaxQuestion,
  generateZScoreQuestion,
  generateDistanceQuestion,
  generateLinearPredictionQuestion,
  generateNeuronQuestion,
  generateFCParametersQuestion,
  generateConvDimensionQuestion,
  generateCNNParametersQuestion,
  generateCentroidQuestion,
  generateF1Question,
  generateKFoldAverageQuestion,
];

export const makeGeneratedQuestions = (count: number): Question[] =>
  Array.from({ length: count }, (_, index) => generatedQuestionFactories[index % generatedQuestionFactories.length]());
