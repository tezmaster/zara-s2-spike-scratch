import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { proratedRefundCents } from "../src/billing.js";
describe("prorated refunds (spike acceptance)", () => {
  it("refunds the unused share of a monthly plan", () => {
    // 3000c / 30d, 10 unused days -> 1000c
    assert.equal(proratedRefundCents(3000, 10, 30), 1000);
  });
  it("refunds the full amount on day zero", () => {
    assert.equal(proratedRefundCents(3000, 30, 30), 3000);
  });
  it("refunds nothing when fully used", () => {
    assert.equal(proratedRefundCents(3000, 0, 30), 0);
  });
});
