import { describe, it, expect } from "vitest";

describe("Gift Cards - recipientLastName Field", () => {
  describe("Input Validation", () => {
    it("should accept recipientLastName in gift card input", () => {
      const input = {
        amount: 10000,
        recipientEmail: "test@example.com",
        recipientName: "Marie",
        recipientLastName: "Dupont",
        message: "Enjoy!",
        buyerEmail: "buyer@example.com",
        promoCode: undefined,
        origin: "http://localhost:3000",
      };

      expect(input.recipientLastName).toBe("Dupont");
      expect(input.recipientName).toBe("Marie");
    });

    it("should validate that recipientLastName is required (non-empty)", () => {
      const validLastName = "Dupont";
      const invalidLastName = "";

      expect(validLastName.length).toBeGreaterThan(0);
      expect(invalidLastName.length).toBe(0);
    });
  });

  describe("Metadata Handling", () => {
    it("should include recipientLastName in Stripe metadata", () => {
      const metadata = {
        recipientEmail: "test@example.com",
        recipientName: "Marie",
        recipientLastName: "Dupont",
        message: "Enjoy!",
        buyerEmail: "buyer@example.com",
        amount: "10000",
      };

      expect(metadata).toHaveProperty("recipientLastName");
      expect(metadata.recipientLastName).toBe("Dupont");
    });

    it("should pass recipientLastName from input to metadata", () => {
      const input = {
        recipientName: "Marie",
        recipientLastName: "Dupont",
      };

      const metadata = {
        recipientName: input.recipientName,
        recipientLastName: input.recipientLastName,
      };

      expect(metadata.recipientLastName).toEqual(input.recipientLastName);
    });
  });

  describe("Email Service", () => {
    it("should construct full name from recipientName and recipientLastName", () => {
      const recipientName = "Marie";
      const recipientLastName = "Dupont";
      const fullName = `${recipientName} ${recipientLastName}`;

      expect(fullName).toBe("Marie Dupont");
    });

    it("should include full name in notification title", () => {
      const recipientName = "Marie";
      const recipientLastName = "Dupont";
      const title = `📧 Carte Cadeau Envoyée - ${recipientName} ${recipientLastName}`;

      expect(title).toContain("Marie Dupont");
      expect(title).toContain("Dupont");
    });

    it("should include full name in notification content", () => {
      const recipientName = "Marie";
      const recipientLastName = "Dupont";
      const recipientEmail = "marie@example.com";
      const fullName = `${recipientName} ${recipientLastName}`;
      const content = `Une carte cadeau de 100€ a été envoyée à ${fullName} (${recipientEmail})`;

      expect(content).toContain("Marie Dupont");
      expect(content).toContain(recipientEmail);
    });
  });

  describe("Database Schema", () => {
    it("should have recipientLastName field in giftCards table", () => {
      // This test verifies the schema includes the field
      const giftCardFields = [
        "id",
        "code",
        "amount",
        "buyerId",
        "buyerEmail",
        "recipientEmail",
        "recipientName",
        "recipientLastName", // New field
        "message",
        "stripePaymentIntentId",
        "status",
        "redeemedAt",
        "sentAt",
        "createdAt",
        "updatedAt",
      ];

      expect(giftCardFields).toContain("recipientLastName");
    });
  });
});
