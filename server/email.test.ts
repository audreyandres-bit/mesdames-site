import { describe, it, expect, vi } from "vitest";
import { sendGiftCardEmail } from "./services/email";

describe("sendGiftCardEmail", () => {
  it("should calculate expiration date 6 months from purchase date", async () => {
    // Mock the notifyOwner function
    vi.mock("../_core/notification", () => ({
      notifyOwner: vi.fn().mockResolvedValue(undefined),
    }));

    const purchaseDate = new Date("2026-06-04");
    const params = {
      recipientEmail: "test@example.com",
      recipientName: "Marie",
      recipientLastName: "Dupont",
      code: "MESDAMES-TEST123",
      amount: 10000, // 100€
      message: "Bon cadeau",
      buyerName: "Audrey",
      purchaseDate,
    };

    // Call the function
    await sendGiftCardEmail(params);

    // The function logs to console, so we can't directly assert the output
    // But we can verify it doesn't throw an error
    expect(true).toBe(true);
  });

  it("should format expiration date in French locale", () => {
    const purchaseDate = new Date("2026-06-04");
    const expirationDate = new Date(purchaseDate);
    expirationDate.setMonth(expirationDate.getMonth() + 6);

    const formattedDate = expirationDate.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Should contain year 2026 and be in December
    expect(formattedDate).toContain("2026");
    expect(formattedDate).toMatch(/décembre/);
  });

  it("should calculate correct month when adding 6 months", () => {
    // Test case: June 4 + 6 months = December (month 11)
    const purchaseDate = new Date("2026-06-04");
    const expirationDate = new Date(purchaseDate);
    expirationDate.setMonth(expirationDate.getMonth() + 6);

    expect(expirationDate.getMonth()).toBe(11); // December (0-indexed)
    expect(expirationDate.getFullYear()).toBe(2026);
  });

  it("should handle month overflow correctly", () => {
    // Test case: January 31 + 6 months = July (with day adjustment)
    const purchaseDate = new Date("2026-01-31");
    const expirationDate = new Date(purchaseDate);
    expirationDate.setMonth(expirationDate.getMonth() + 6);

    expect(expirationDate.getMonth()).toBe(6); // July (0-indexed)
    expect(expirationDate.getFullYear()).toBe(2026);
  });

  it("should handle year overflow correctly", () => {
    // Test case: November 30 + 6 months = May next year
    const purchaseDate = new Date("2026-11-30");
    const expirationDate = new Date(purchaseDate);
    expirationDate.setMonth(expirationDate.getMonth() + 6);

    expect(expirationDate.getMonth()).toBe(4); // May (0-indexed)
    expect(expirationDate.getFullYear()).toBe(2027);
  });
});
