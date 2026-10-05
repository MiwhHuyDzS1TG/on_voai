export type Difficulty = "easy" | "medium" | "hard" | "iaio";
export type QuestionType =
  | "single-choice"
  | "multiple-choice"
  | "true-false"
  | "numeric"
  | "scenario"
  | "ordering";

export type AnswerValue = string | string[] | number | boolean;

export type Question = {
  id: string;
  module: string;
  lessonId?: string;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  type: QuestionType;
  prompt: string;
  choices?: string[];
  answer: AnswerValue;
  tolerance?: number;
  explanation: string;
  wrongChoiceExplanations?: Record<string, string>;
  choiceExplanations?: Record<string, string>;
  hints?: string[];
  source: string[];
  misconceptionTags: string[];
  skills?: string[];
};

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  summary: string;
  objectives: string[];
  intuition: string;
  definition: string;
  formula?: string;
  simpleExample: string;
  vaioExample: string;
  distinctions: Array<{ left: string; right: string; note: string }>;
  traps: string[];
  recall: string[];
  sources: string[];
  extension?: boolean;
};

export type LessonSource = {
  file: string;
  section: string;
  label: string;
};

export type LessonChapter = {
  lessonId: string;
  objectives: string[];
  opening: string[];
  concepts: Array<{ title: string; body: string[] }>;
  formulas: Array<{
    name: string;
    latex: string;
    variables: string[];
    input: string;
    output: string;
    range?: string;
    meaning: string;
  }>;
  workedExample: { title: string; steps: string[]; conclusion: string };
  vaioProblem: { prompt: string; steps: string[]; answer: string };
  whyImportant: string[];
  misconceptions: Array<{ claim: string; correction: string; counterexample: string }>;
  recall: Array<{ prompt: string; answer: string }>;
  remember: string[];
  simplerExplanation: string[];
  sources: LessonSource[];
};

export type CurriculumModule = {
  id: string;
  index: number;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  lessonIds: string[];
  source: string;
};

export type Formula = {
  id: string;
  name: string;
  category: string;
  latex: string;
  symbols: string;
  intuition: string;
  example: string;
  pitfall: string;
  source: string[];
  extension?: boolean;
};

export type Flashcard = {
  id: string;
  topic: string;
  front: string;
  definition: string;
  formula?: string;
  intuition: string;
  useWhen: string;
  confusion: string;
  source: string[];
};

export type MistakeEntry = {
  questionId: string;
  lessonId?: string;
  prompt: string;
  selected: AnswerValue;
  correct: AnswerValue;
  explanation: string;
  topic: string;
  misconceptionTags: string[];
  count: number;
  lastWrongAt: string;
  nextReviewAt: string;
};

export type AnswerRecord = {
  questionId: string;
  topic: string;
  correct: boolean;
  difficulty: Difficulty;
  confidence: number;
  answeredAt: string;
  mode: "practice" | "diagnostic" | "exam" | "quick-check";
};

export type FlashcardSchedule = {
  cardId: string;
  intervalDays: number;
  ease: number;
  dueAt: string;
  lastRating: "again" | "hard" | "good" | "easy";
};

export type MockResult = {
  id: string;
  title: string;
  score: number;
  total: number;
  durationSeconds: number;
  completedAt: string;
  byModule: Record<string, { correct: number; total: number }>;
  questionIds: string[];
};

export type StudyPlan = {
  examDate: string;
  minutesPerDay: number;
  weekdays: number[];
};

export type ProgressData = {
  version: 1;
  onboardingComplete: boolean;
  lessonCompletion: string[];
  mastery: Record<string, number>;
  answers: AnswerRecord[];
  mistakes: MistakeEntry[];
  flashcards: Record<string, FlashcardSchedule>;
  mocks: MockResult[];
  studyDays: string[];
  plan: StudyPlan | null;
  theme: "light" | "dark";
};

export type Trap = {
  id: string;
  title: string;
  falseClaim: string;
  whyWrong: string;
  memoryHook: string;
  check: string;
  answer: string;
  source: string[];
};
