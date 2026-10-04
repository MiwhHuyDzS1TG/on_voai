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

export const generatedQuestionFactories = [
  generateConfusionQuestion,
  generateRegressionMetricQuestion,
  generateSigmoidQuestion,
  generateEntropyQuestion,
];

export const makeGeneratedQuestions = (count: number): Question[] =>
  Array.from({ length: count }, (_, index) => generatedQuestionFactories[index % generatedQuestionFactories.length]());
