import Doliprane from "../../../../src/domain/drug/models/Doliprane";

describe("Doliprane", () => {
  it("should initialize correctly", () => {
    const drug = new Doliprane("Doliprane", 10, 20);
    expect(drug.name).toBe("Doliprane");
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(20);
  });

  it("should decrement expiresIn and benefit correctly", () => {
    const drug = new Doliprane("Doliprane", 5, 10);
    drug.updateBenefitValue();
    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(9);
  });

  it("should double decrement benefit after expiry", () => {
    const drug = new Doliprane("Doliprane", 0, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toBe(8);
  });

  it("should not let benefit drop below 0", () => {
    const drug = new Doliprane("Doliprane", 5, 10);
    for (let i = 0; i < 10; i++) {
      drug.updateBenefitValue();
    }
    expect(drug.benefit).toBe(0);
  });
});
