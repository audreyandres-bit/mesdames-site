import { describe, it, expect } from "vitest";
import { RESET_PROGRAM } from "@shared/services";

describe("Home Page Data", () => {
  it("should have RESET program with 4 weeks", () => {
    expect(RESET_PROGRAM.weeks).toHaveLength(4);
  });

  it("should have program title and subtitle", () => {
    expect(RESET_PROGRAM.title).toBe("Programme RESET");
    expect(RESET_PROGRAM.subtitle).toBe("4 semaines pour te remettre au centre");
  });

  it("should have correct week structure", () => {
    RESET_PROGRAM.weeks.forEach((week, idx) => {
      expect(week.week).toBe(idx + 1);
      expect(week.title).toBeDefined();
      expect(week.soin).toBeDefined();
      expect(week.description).toBeDefined();
      expect(Array.isArray(week.benefits)).toBe(true);
      expect(week.benefits.length).toBeGreaterThan(0);
    });
  });

  it("should have specific soins for each week", () => {
    expect(RESET_PROGRAM.weeks[0].soin).toBe("Head Spa Aroma");
    expect(RESET_PROGRAM.weeks[1].soin).toBe("Belly Flow");
    expect(RESET_PROGRAM.weeks[2].soin).toBe("Réflexologie Plantaire");
    expect(RESET_PROGRAM.weeks[3].soin).toBe("Lahochi");
  });
});
