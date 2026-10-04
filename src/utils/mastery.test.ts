import { describe, expect, it } from "vitest";
import { masteryLabel, scheduleFlashcard, updateMastery } from "./mastery";

describe("mastery update", () => {
  it("increases after a correct answer", () => expect(updateMastery(50, true, "medium", 3)).toBeGreaterThan(50));
  it("decreases after a wrong answer", () => expect(updateMastery(50, false, "medium", 3)).toBeLessThan(50));
  it("rewards a hard correct answer more than an easy one", () => expect(updateMastery(50, true, "hard", 3)).toBeGreaterThan(updateMastery(50, true, "easy", 3)));
  it("stays within 0-100", () => {
    expect(updateMastery(100, true, "iaio", 4)).toBeLessThanOrEqual(100);
    expect(updateMastery(0, false, "iaio", 4)).toBeGreaterThanOrEqual(0);
  });
  it("maps labels", () => {
    expect(masteryLabel(39)).toBe("Yếu");
    expect(masteryLabel(95)).toBe("Thành thạo");
  });
});

describe("spaced repetition", () => {
  it("schedules again quickly", () => expect(scheduleFlashcard("again", 5).intervalDays).toBe(0));
  it("grows the interval for easy", () => expect(scheduleFlashcard("easy", 4).intervalDays).toBe(14));
});
