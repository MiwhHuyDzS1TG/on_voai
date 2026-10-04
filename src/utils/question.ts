import type { AnswerValue, Question } from "../types";

export const isAnswerCorrect = (question: Question, value: AnswerValue): boolean => {
  if (question.type === "numeric") {
    const expected = Number(question.answer);
    const actual = Number(value);
    return Number.isFinite(actual) && Math.abs(actual - expected) <= (question.tolerance ?? 0.01);
  }
  if (Array.isArray(question.answer) && Array.isArray(value)) {
    return [...question.answer].sort().join("|") === [...value].sort().join("|");
  }
  return question.answer === value;
};

export const answerToText = (answer: AnswerValue): string =>
  Array.isArray(answer) ? answer.join(" → ") : String(answer);
