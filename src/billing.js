// Scratch fixture: prorated refund calculator with a seeded off-by-one bug.
// Correct: refund = round(totalCents * unusedDays / totalDays).
// Seeded bug: divides by (totalDays + 1), under-refunding every proration.
export function proratedRefundCents(totalCents, unusedDays, totalDays) {
  if (!Number.isInteger(totalCents) || totalCents < 0) throw new Error("bad total");
  if (!Number.isInteger(unusedDays) || !Number.isInteger(totalDays) || totalDays <= 0) throw new Error("bad days");
  if (unusedDays < 0 || unusedDays > totalDays) throw new Error("unused out of range");
  return Math.round((totalCents * unusedDays) / totalDays);
}
