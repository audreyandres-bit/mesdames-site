import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleStripeWebhook } from "./stripe";
import { Request, Response } from "express";

describe("Stripe Webhook", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockJson: any;
  let mockStatus: any;

  beforeEach(() => {
    mockJson = vi.fn().mockReturnValue({});
    mockStatus = vi.fn().mockReturnValue({ json: mockJson });

    mockRes = {
      json: mockJson,
      status: mockStatus,
    };
  });

  it("should reject requests without stripe-signature header", async () => {
    mockReq = {
      headers: {},
      body: "{}",
    };

    await handleStripeWebhook(mockReq as Request, mockRes as Response);

    expect(mockStatus).toHaveBeenCalledWith(400);
    expect(mockJson).toHaveBeenCalledWith({ error: "Missing signature" });
  });

  it("should reject requests with invalid signature", async () => {
    mockReq = {
      headers: {
        "stripe-signature": "invalid-signature",
      },
      body: "{}",
    };

    await handleStripeWebhook(mockReq as Request, mockRes as Response);

    expect(mockStatus).toHaveBeenCalledWith(400);
    expect(mockJson).toHaveBeenCalledWith({ error: "Invalid signature" });
  });
});
