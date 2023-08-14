import MagicPill from "../../../../src/domain/drug/models/MagicPill";

describe("Magic Pill", () => {
  it("should initialize correctly", () => {
    const drug = new MagicPill("Magic Pill", 10, 20);
    expect(drug.name).toBe("Magic Pill");
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(20);
  });

  it("should not change expiresIn", () => {
    const drug = new MagicPill("Magic Pill", 5, 10);
    drug.updateBenefitValue();
    expect(drug.expiresIn).toBe(5);
  });

  it("should not change benefit", () => {
    const drug = new MagicPill("Magic Pill", 5, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(10);
  });

  it("should keep benefit and expiresIn unchanged even after multiple days", () => {
    const drug = new MagicPill("Magic Pill", 5, 10);
    for (let i = 0; i < 30; i++) {
      drug.updateBenefitValue();
    }
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(10);
  });
});
