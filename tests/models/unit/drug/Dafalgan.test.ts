import Dafalgan from "../../../../src/domain/drug/models/Dafalgan";

describe("Dafalgan", () => {
  it("should decrease benefit by 2 before expiration", () => {
    const drug = new Dafalgan("Dafalgan", 5, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(8); // Reduced by 2
  });

  it("should decrease benefit by 4 after expiration", () => {
    const drug = new Dafalgan("Dafalgan", 0, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(6); // Reduced by 4
  });

  it("should not have a benefit less than 0", () => {
    const drug = new Dafalgan("Dafalgan", 5, 1);
    drug.updateBenefitValue();
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(0); // It shouldn't go negative
  });

  it("should reduce expiresIn value after updating benefit", () => {
    const drug = new Dafalgan("Dafalgan", 5, 10);
    drug.updateBenefitValue();
    expect(drug.expiresIn).toBe(4); // Reduced by 1
  });

  test("should not allow benefit to drop below 0", () => {
    const drug = new Dafalgan("Dafalgan", 0, 1); // 0 days to expire and benefit of 1
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(0); // Benefit should not drop below 0
  });
});
