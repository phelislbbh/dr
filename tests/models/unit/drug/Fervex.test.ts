import Fervex from "../../../../src/domain/drug/models/Fervex";

describe("Fervex", () => {
  it("should increase benefit by 1 when more than 10 days are left", () => {
    const drug = new Fervex("Fervex", 11, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(11);
  });

  it("should increase benefit by 2 when 10 days or less are left", () => {
    const drug = new Fervex("Fervex", 10, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(12);

    drug.updateBenefitValue();
    expect(drug.benefit).toBe(14);
  });

  it("should increase benefit by 3 when 5 days or less are left", () => {
    const drug = new Fervex("Fervex", 5, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(13);

    drug.updateBenefitValue();
    expect(drug.benefit).toBe(16);
  });

  it("should drop benefit to 0 after expiration date", () => {
    const drug = new Fervex("Fervex", 0, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(0);
  });

  it("should not increase benefit beyond 50", () => {
    const drug = new Fervex("Fervex", 5, 49);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(50);

    drug.updateBenefitValue();
    expect(drug.benefit).toBe(50);
  });

  it("should decrease expiresIn value as days pass", () => {
    const drug = new Fervex("Fervex", 5, 10);
    drug.updateBenefitValue();
    expect(drug.expiresIn).toBe(4);
  });
});
