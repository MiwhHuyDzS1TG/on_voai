import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { AnswerRecord, AnswerValue, FlashcardSchedule, MockResult, ProgressData, Question, StudyPlan } from "../types";
import { updateMastery, scheduleFlashcard } from "../utils/mastery";

const STORAGE_KEY = "vaio-study-progress-v1";

const emptyProgress: ProgressData = {
  version: 1,
  onboardingComplete: false,
  lessonCompletion: [],
  mastery: {},
  answers: [],
  mistakes: [],
  flashcards: {},
  mocks: [],
  studyDays: [],
  plan: null,
  theme: "light",
};

type ProgressContextValue = {
  progress: ProgressData;
  completeOnboarding: () => void;
  completeLesson: (lessonId: string, topic: string) => void;
  recordAnswer: (question: Question, selected: AnswerValue, correct: boolean, confidence: number, mode: AnswerRecord["mode"]) => void;
  reviewFlashcard: (cardId: string, rating: FlashcardSchedule["lastRating"]) => void;
  addMock: (result: MockResult) => void;
  setPlan: (plan: StudyPlan) => void;
  toggleTheme: () => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<void>;
  replaceProgress: (data: ProgressData) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

const todayKey = (): string => new Date().toISOString().slice(0, 10);

const loadProgress = (): ProgressData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressData>;
    if (parsed.version !== 1) return emptyProgress;
    return { ...emptyProgress, ...parsed };
  } catch {
    return emptyProgress;
  }
};

const isValidProgress = (data: Partial<ProgressData>): data is ProgressData => data.version === 1
  && Array.isArray(data.answers)
  && Array.isArray(data.mistakes)
  && Array.isArray(data.lessonCompletion)
  && typeof data.mastery === "object";

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    document.documentElement.dataset.theme = progress.theme;
  }, [progress]);

  const touchStudyDay = (data: ProgressData): ProgressData => {
    const today = todayKey();
    return data.studyDays.includes(today) ? data : { ...data, studyDays: [...data.studyDays, today] };
  };

  const completeOnboarding = useCallback(() => {
    setProgress((current) => ({ ...current, onboardingComplete: true }));
  }, []);

  const completeLesson = useCallback((lessonId: string, topic: string) => {
    setProgress((current) => touchStudyDay({
      ...current,
      lessonCompletion: current.lessonCompletion.includes(lessonId) ? current.lessonCompletion : [...current.lessonCompletion, lessonId],
      mastery: { ...current.mastery, [topic]: Math.max(current.mastery[topic] ?? 0, 35) },
    }));
  }, []);

  const recordAnswer = useCallback((question: Question, selected: AnswerValue, correct: boolean, confidence: number, mode: AnswerRecord["mode"]) => {
    setProgress((current) => {
      const answeredAt = new Date().toISOString();
      const record: AnswerRecord = { questionId: question.id, topic: question.topic, correct, difficulty: question.difficulty, confidence, answeredAt, mode };
      const nextMastery = updateMastery(current.mastery[question.topic] ?? 20, correct, question.difficulty, confidence);
      let mistakes = current.mistakes;
      if (!correct) {
        const existing = mistakes.find((item) => item.questionId === question.id);
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + 1);
        const entry = {
          questionId: question.id,
          lessonId: question.lessonId,
          prompt: question.prompt,
          selected,
          correct: question.answer,
          explanation: question.explanation,
          topic: question.topic,
          misconceptionTags: question.misconceptionTags,
          count: (existing?.count ?? 0) + 1,
          lastWrongAt: answeredAt,
          nextReviewAt: nextReview.toISOString(),
        };
        mistakes = existing ? mistakes.map((item) => item.questionId === question.id ? entry : item) : [entry, ...mistakes];
      }
      return touchStudyDay({
        ...current,
        mastery: { ...current.mastery, [question.topic]: nextMastery },
        answers: [...current.answers, record],
        mistakes,
      });
    });
  }, []);

  const reviewFlashcard = useCallback((cardId: string, rating: FlashcardSchedule["lastRating"]) => {
    setProgress((current) => {
      const previous = current.flashcards[cardId];
      const next = scheduleFlashcard(rating, previous?.intervalDays ?? 0);
      const dueAt = new Date();
      if (rating === "again") dueAt.setMinutes(dueAt.getMinutes() + 10);
      else dueAt.setDate(dueAt.getDate() + next.intervalDays);
      return touchStudyDay({
        ...current,
        flashcards: {
          ...current.flashcards,
          [cardId]: { cardId, ...next, dueAt: dueAt.toISOString(), lastRating: rating },
        },
      });
    });
  }, []);

  const addMock = useCallback((result: MockResult) => {
    setProgress((current) => touchStudyDay({ ...current, mocks: [result, ...current.mocks].slice(0, 20) }));
  }, []);

  const setPlan = useCallback((plan: StudyPlan) => setProgress((current) => ({ ...current, plan })), []);
  const toggleTheme = useCallback(() => setProgress((current) => ({ ...current, theme: current.theme === "light" ? "dark" : "light" })), []);

  const exportProgress = useCallback(() => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `vaio-progress-${todayKey()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }, [progress]);

  const importProgress = useCallback(async (file: File) => {
    const parsed = JSON.parse(await file.text()) as ProgressData;
    if (!isValidProgress(parsed)) {
      throw new Error("Tệp tiến độ không hợp lệ");
    }
    setProgress({ ...emptyProgress, ...parsed });
  }, []);

  const replaceProgress = useCallback((data: ProgressData) => {
    if (!isValidProgress(data)) throw new Error("Dữ liệu cloud không hợp lệ");
    setProgress({ ...emptyProgress, ...data });
  }, []);

  const resetProgress = useCallback(() => setProgress({ ...emptyProgress, theme: progress.theme }), [progress.theme]);

  const value = useMemo<ProgressContextValue>(() => ({
    progress,
    completeOnboarding,
    completeLesson,
    recordAnswer,
    reviewFlashcard,
    addMock,
    setPlan,
    toggleTheme,
    exportProgress,
    importProgress,
    replaceProgress,
    resetProgress,
  }), [progress, completeOnboarding, completeLesson, recordAnswer, reviewFlashcard, addMock, setPlan, toggleTheme, exportProgress, importProgress, replaceProgress, resetProgress]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export const useProgress = (): ProgressContextValue => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used inside ProgressProvider");
  return context;
};
