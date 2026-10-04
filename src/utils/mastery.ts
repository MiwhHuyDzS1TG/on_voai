import type { Difficulty } from "../types";

const difficultyWeight: Record<Difficulty, number> = {
  easy: 0.75,
  medium: 1,
  hard: 1.25,
  iaio: 1.4,
};

export const updateMastery = (
  current: number,
  correct: boolean,
  difficulty: Difficulty,
  confidence: number,
): number => {
  const boundedCurrent = Math.max(0, Math.min(100, current));
  const boundedConfidence = Math.max(1, Math.min(4, confidence));
  const weight = difficultyWeight[difficulty];
  const confidenceFactor = correct ? 0.85 + boundedConfidence * 0.08 : 0.9 + boundedConfidence * 0.12;
  const target = correct ? 100 : 0;
  const learningRate = (correct ? 0.11 : 0.16) * weight * confidenceFactor;
  return Math.round(Math.max(0, Math.min(100, boundedCurrent + learningRate * (target - boundedCurrent))));
};

export const masteryLabel = (score: number): string => {
  if (score < 40) return "Yếu";
  if (score < 60) return "Đang học";
  if (score < 80) return "Khá";
  if (score < 90) return "Vững";
  return "Thành thạo";
};

export const scheduleFlashcard = (
  rating: "again" | "hard" | "good" | "easy",
  previousInterval = 0,
): { intervalDays: number; ease: number } => {
  const multipliers = { again: 0, hard: 1.2, good: 2.2, easy: 3.5 };
  const intervalDays = rating === "again" ? 0 : Math.max(1, Math.round(Math.max(1, previousInterval) * multipliers[rating]));
  const ease = { again: 1.7, hard: 2, good: 2.4, easy: 2.7 }[rating];
  return { intervalDays, ease };
};
