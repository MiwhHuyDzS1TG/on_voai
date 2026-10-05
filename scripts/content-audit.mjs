import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const values = (text, pattern) => [...text.matchAll(pattern)].map((match) => match[1]);
const duplicates = (items) => items.filter((item, index) => items.indexOf(item) !== index);

const curriculum = read("src/data/curriculum.ts");
const [moduleSource, lessonSource = ""] = curriculum.split("export const lessons");
const moduleIds = values(moduleSource, /\bid:\s*"([^"]+)"/g);
const lessonIds = values(lessonSource, /\bid:\s*"([^"]+)"/g);

const chaptersSource = read("src/data/lessonChapters.ts");
const chapterIds = values(chaptersSource, /\blessonId:\s*"([^"]+)"/g);
const chapters = chapterIds.map((id, index) => {
  const start = chaptersSource.indexOf(`lessonId: "${id}"`);
  const nextId = chapterIds[index + 1];
  const end = nextId ? chaptersSource.indexOf(`lessonId: "${nextId}"`, start + 1) : chaptersSource.indexOf("];", start);
  return { id, source: chaptersSource.slice(start, end) };
});

const importedSource = read("src/data/importedQuestions.ts");
const importedJsonStart = importedSource.indexOf("= [") + 2;
const importedJson = importedSource.slice(importedJsonStart, importedSource.lastIndexOf("];") + 1);
const importedQuestions = JSON.parse(importedJson);

const curatedSource = read("src/data/questions.ts").split("export const questionBank")[0];
const curatedIds = values(curatedSource, /\bid:\s*"([^"]+)"/g);
const importedIds = importedQuestions.map((question) => question.id);
const questionIds = [...curatedIds, ...importedIds];

const reviewSource = read("src/data/review.ts");
const formulasSegment = reviewSource.includes("export const formulas") ? reviewSource.split("export const formulas")[1].split("];", 1)[0] : "";
const formulaIds = values(formulasSegment, /\bid:\s*"([^"]+)"/g);
const coverageSource = read("src/data/coverage.ts");
const coverageSections = values(coverageSource, /\bsection:\s*"([^"]+)"/g);
const coverageStatuses = values(coverageSource, /\bstatus:\s*"([^"]+)"/g);
const caseStudySource = read("src/data/caseStudies.ts");
const caseStudyIds = values(caseStudySource, /\n\s{4}id:\s*"([^"]+)"/g);
const failures = [];
const warnings = [];

for (const id of duplicates(lessonIds)) failures.push(`Duplicate lesson ID: ${id}`);
for (const id of duplicates(chapterIds)) failures.push(`Duplicate teaching chapter: ${id}`);
for (const id of duplicates(questionIds)) failures.push(`Duplicate question ID: ${id}`);
for (const id of duplicates(formulaIds)) failures.push(`Duplicate formula ID: ${id}`);
for (const status of coverageStatuses) if (status !== "covered") failures.push(`Coverage contains status ${status}`);
if (coverageSections.length < 16) failures.push("Coverage map does not include every VAIO v2 subsection");
if (caseStudyIds.length < 12) failures.push("Fewer than 12 case studies are implemented");

for (const id of lessonIds) {
  if (!chapterIds.includes(id)) failures.push(`Lesson ${id} has no full teaching chapter`);
  if (!importedQuestions.some((question) => question.lessonId === id)) warnings.push(`Lesson ${id} has no imported DOCX practice`);
}
for (const id of chapterIds) if (!lessonIds.includes(id)) failures.push(`Teaching chapter ${id} has no lesson`);

for (const chapter of chapters) {
  const required = ["objectives:", "opening:", "concepts:", "workedExample:", "vaioProblem:", "whyImportant:", "misconceptions:", "recall:", "remember:", "simplerExplanation:", "sources:"];
  for (const field of required) if (!chapter.source.includes(field)) failures.push(`Teaching chapter ${chapter.id} is missing ${field.slice(0, -1)}`);
  const misconceptionCount = values(chapter.source, /\bclaim:\s*"/g).length;
  if (misconceptionCount < 2) failures.push(`Teaching chapter ${chapter.id} has fewer than 2 misconceptions`);
}

for (const question of importedQuestions) {
  if (!lessonIds.includes(question.lessonId)) failures.push(`Question ${question.id} maps to missing lesson ${question.lessonId}`);
  if (!question.explanation?.trim()) failures.push(`Question ${question.id} has no explanation`);
  if (!Array.isArray(question.hints) || question.hints.length !== 3) failures.push(`Question ${question.id} does not have 3 hints`);
  if (["single-choice", "scenario"].includes(question.type) && (!question.choices?.includes(question.answer))) failures.push(`Question ${question.id} has invalid answer`);
  if (question.type === "multiple-choice" && (!Array.isArray(question.answer) || !question.answer.every((answer) => question.choices?.includes(answer)))) failures.push(`Question ${question.id} has invalid multiple answers`);
}

if (values(lessonSource, /\bobjectives:\s*\[/g).length !== lessonIds.length) failures.push("At least one lesson is missing objectives");
if (values(lessonSource, /\bsources:\s*\[/g).length !== lessonIds.length) failures.push("At least one lesson is missing sources");
if (values(curatedSource, /\bexplanation:\s*"/g).length < curatedIds.length) failures.push("At least one curated question is missing an explanation");

console.log("ONVOAI content audit");
console.log(`Modules: ${moduleIds.length}`);
console.log(`Lessons: ${lessonIds.length}`);
console.log(`Full teaching chapters: ${chapterIds.length}`);
console.log(`Questions: ${questionIds.length} (${importedQuestions.length} imported from DOCX)`);
console.log(`Formulas: ${formulaIds.length}`);
console.log(`Coverage rows: ${coverageSections.length}`);
console.log(`Case studies: ${caseStudyIds.length}`);
if (warnings.length) {
  console.log(`Warnings: ${warnings.length}`);
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (failures.length) {
  console.error(`Failures: ${failures.length}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Result: PASS");
}
