import { describe, expect, it } from "vitest";
import { accuracy, bayesPosterior, entropy, euclideanDistance, f1, falsePositiveRate, informationGain, mae, minMax, mse, precision, recall, rmse, sigmoid, zScore } from "./metrics";

describe("classification metrics", () => {
  const matrix = { tp: 80, tn: 890, fp: 20, fn: 10 };
  it("calculates accuracy", () => expect(accuracy(matrix)).toBeCloseTo(0.97));
  it("calculates precision", () => expect(precision(matrix)).toBeCloseTo(0.8));
  it("calculates recall", () => expect(recall(matrix)).toBeCloseTo(80 / 90));
  it("calculates F1", () => expect(f1(matrix)).toBeCloseTo(0.842105, 5));
  it("calculates FPR", () => expect(falsePositiveRate(matrix)).toBeCloseTo(20 / 910));
  it("returns zero for undefined denominator", () => expect(precision({ tp: 0, tn: 4, fp: 0, fn: 1 })).toBe(0));
});

describe("regression metrics", () => {
  const actual = [1, 3, 5];
  const predicted = [2, 1, 5];
  it("calculates MAE", () => expect(mae(actual, predicted)).toBeCloseTo(1));
  it("calculates MSE", () => expect(mse(actual, predicted)).toBeCloseTo(5 / 3));
  it("calculates RMSE", () => expect(rmse(actual, predicted)).toBeCloseTo(Math.sqrt(5 / 3)));
});

describe("preprocessing and distance", () => {
  it("calculates Min-Max", () => expect(minMax(30, 10, 50)).toBeCloseTo(0.5));
  it("calculates z-score", () => expect(zScore(12, 10, 2)).toBeCloseTo(1));
  it("calculates Euclidean distance", () => expect(euclideanDistance([0, 0], [3, 4])).toBeCloseTo(5));
});

describe("probability and tree utilities", () => {
  it("calculates sigmoid", () => expect(sigmoid(0)).toBeCloseTo(0.5));
  it("calculates entropy", () => expect(entropy([5, 5])).toBeCloseTo(1));
  it("calculates information gain", () => expect(informationGain([5, 5], [[4, 1], [1, 4]])).toBeCloseTo(0.2780719));
  it("calculates Bayes posterior", () => expect(bayesPosterior(0.1, 0.8, 0.2)).toBeCloseTo(0.4));
});
