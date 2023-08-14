import HerbalTea from "../../../../src/domain/drug/models/HerbalTea";

describe("Herbal Tea", () => {
  it("should increase benefit by 1 when not expired", () => {
    const drug = new HerbalTea("Herbal Tea", 5, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(11);
  });

  it("should decrease expiresIn by 1 after a day", () => {
    const drug = new HerbalTea("Herbal Tea", 5, 10);
    drug.updateBenefitValue();
    expect(drug.expiresIn).toBe(4);
  });

  it("should increase benefit by 2 after expiration", () => {
    const drug = new HerbalTea("Herbal Tea", 0, 15);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(17);
  });

  it("should not increase benefit above 50", () => {
    const drug = new HerbalTea("Herbal Tea", 5, 49);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(50);

    drug.updateBenefitValue();
    expect(drug.benefit).toBe(50); // remains capped at 50
  });
});
