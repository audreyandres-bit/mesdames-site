import { describe, it, expect } from "vitest";
import { SERVICES_DATA, RESET_PROGRAM, GIFT_CARD_AMOUNTS } from "./services";

describe("Services Data", () => {
  it("should have all service categories", () => {
    expect(SERVICES_DATA).toHaveProperty("head-spa");
    expect(SERVICES_DATA).toHaveProperty("body-rituals");
    expect(SERVICES_DATA).toHaveProperty("drainage");
    expect(SERVICES_DATA).toHaveProperty("reflexology");
    expect(SERVICES_DATA).toHaveProperty("di-nina");
  });

  it("should have services in each category", () => {
    Object.values(SERVICES_DATA).forEach((category) => {
      expect(category.services).toBeDefined();
      expect(Array.isArray(category.services)).toBe(true);
      expect(category.services.length).toBeGreaterThan(0);
    });
  });

  it("should have required fields for each service", () => {
    Object.values(SERVICES_DATA).forEach((category) => {
      category.services.forEach((service: any) => {
        expect(service).toHaveProperty("id");
        expect(service).toHaveProperty("name");
        expect(service).toHaveProperty("duration");
        expect(service).toHaveProperty("price");
        expect(service).toHaveProperty("description");
      });
    });
  });
});

describe("RESET Program", () => {
  it("should have 4 weeks", () => {
    expect(RESET_PROGRAM.weeks).toHaveLength(4);
  });

  it("should have required fields for each week", () => {
    RESET_PROGRAM.weeks.forEach((week) => {
      expect(week).toHaveProperty("week");
      expect(week).toHaveProperty("title");
      expect(week).toHaveProperty("soin");
      expect(week).toHaveProperty("description");
      expect(week).toHaveProperty("benefits");
      expect(Array.isArray(week.benefits)).toBe(true);
    });
  });

  it("should have correct week numbers", () => {
    RESET_PROGRAM.weeks.forEach((week, idx) => {
      expect(week.week).toBe(idx + 1);
    });
  });
});

describe("Gift Card Amounts", () => {
  it("should have multiple gift card options", () => {
    expect(GIFT_CARD_AMOUNTS.length).toBeGreaterThan(0);
  });

  it("should have required fields for each amount", () => {
    GIFT_CARD_AMOUNTS.forEach((option) => {
      expect(option).toHaveProperty("amount");
      expect(option).toHaveProperty("label");
      expect(typeof option.amount).toBe("number");
      expect(typeof option.label).toBe("string");
    });
  });

  it("should have amounts in ascending order", () => {
    for (let i = 1; i < GIFT_CARD_AMOUNTS.length; i++) {
      expect(GIFT_CARD_AMOUNTS[i].amount).toBeGreaterThan(GIFT_CARD_AMOUNTS[i - 1].amount);
    }
  });
});
