export type Confusion = { tp: number; tn: number; fp: number; fn: number };

const safeDivide = (numerator: number, denominator: number): number =>
  denominator === 0 ? 0 : numerator / denominator;

export const accuracy = ({ tp, tn, fp, fn }: Confusion): number =>
  safeDivide(tp + tn, tp + tn + fp + fn);

export const precision = ({ tp, fp }: Confusion): number => safeDivide(tp, tp + fp);

export const recall = ({ tp, fn }: Confusion): number => safeDivide(tp, tp + fn);

export const f1 = (matrix: Confusion): number => {
  const p = precision(matrix);
  const r = recall(matrix);
  return safeDivide(2 * p * r, p + r);
};

export const falsePositiveRate = ({ fp, tn }: Confusion): number => safeDivide(fp, fp + tn);

export const mae = (actual: number[], predicted: number[]): number => {
  validatePairs(actual, predicted);
  return actual.reduce((sum, value, index) => sum + Math.abs(value - predicted[index]), 0) / actual.length;
};

export const mse = (actual: number[], predicted: number[]): number => {
  validatePairs(actual, predicted);
  return actual.reduce((sum, value, index) => sum + (value - predicted[index]) ** 2, 0) / actual.length;
};

export const rmse = (actual: number[], predicted: number[]): number => Math.sqrt(mse(actual, predicted));

export const minMax = (value: number, min: number, max: number): number => {
  if (max === min) throw new Error("max phải khác min");
  return (value - min) / (max - min);
};

export const zScore = (value: number, mean: number, standardDeviation: number): number => {
  if (standardDeviation === 0) throw new Error("Độ lệch chuẩn phải khác 0");
  return (value - mean) / standardDeviation;
};

export const euclideanDistance = (a: number[], b: number[]): number => {
  validatePairs(a, b);
  return Math.sqrt(a.reduce((sum, value, index) => sum + (value - b[index]) ** 2, 0));
};

export const sigmoid = (value: number): number => 1 / (1 + Math.exp(-value));

export const entropy = (counts: number[]): number => {
  const total = counts.reduce((sum, count) => sum + count, 0);
  if (total === 0) return 0;
  return counts.reduce((sum, count) => {
    if (count === 0) return sum;
    const probability = count / total;
    return sum - probability * Math.log2(probability);
  }, 0);
};

export const informationGain = (parent: number[], children: number[][]): number => {
  const parentTotal = parent.reduce((sum, count) => sum + count, 0);
  if (parentTotal === 0) return 0;
  const weightedChildren = children.reduce((sum, child) => {
    const childTotal = child.reduce((childSum, count) => childSum + count, 0);
    return sum + (childTotal / parentTotal) * entropy(child);
  }, 0);
  return entropy(parent) - weightedChildren;
};

export const bayesPosterior = (prior: number, likelihood: number, evidence: number): number => {
  if (evidence <= 0) throw new Error("Evidence phải lớn hơn 0");
  return (likelihood * prior) / evidence;
};

export const formatPercent = (value: number, digits = 1): string => `${(value * 100).toFixed(digits)}%`;

function validatePairs(a: number[], b: number[]): void {
  if (a.length === 0 || a.length !== b.length) {
    throw new Error("Hai mảng phải có cùng độ dài và không rỗng");
  }
}
