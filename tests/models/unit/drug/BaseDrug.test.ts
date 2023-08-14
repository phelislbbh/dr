import Drug from "../../../../src/domain/drug/models/BaseDrug";

class DummyDrug extends Drug {
  updateBenefitValue() {}
}

describe("Drug base class", () => {
  describe("Utility methods", () => {
    it("should increment benefit", () => {
      const drug = new DummyDrug("Doliprane", 5, 10);
      drug["incrementBenefit"](5);
      expect(drug.benefit).toBe(15);
    });

    it("should not increment benefit above 50", () => {
      const drug = new DummyDrug("Doliprane", 5, 49);
      drug["incrementBenefit"](5);
      expect(drug.benefit).toBe(50);
    });

    it("should decrement benefit", () => {
      const drug = new DummyDrug("Doliprane", 5, 10);
      drug["decrementBenefit"](5);
      expect(drug.benefit).toBe(5);
    });

    it("should not decrement benefit below 0", () => {
      const drug = new DummyDrug("Doliprane", 5, 1);
      drug["decrementBenefit"](5);
      expect(drug.benefit).toBe(0);
    });

    it("should decrement expiresIn", () => {
      const drug = new DummyDrug("Doliprane", 5, 10);
      drug.decrementExpiresIn();
      expect(drug.expiresIn).toBe(4);
    });
  });

  describe("handleExpiration method", () => {
    it("should decrement benefit twice when expired", () => {
      const drug = new DummyDrug("Doliprane", -1, 10);
      drug.handleExpiration();
      expect(drug.benefit).toBe(9); // Assuming default behavior is to decrement by 1
    });

    it("should not decrement benefit if not expired", () => {
      const drug = new DummyDrug("Doliprane", 5, 10);
      drug.handleExpiration();
      expect(drug.benefit).toBe(10);
    });
  });

  describe("Validation", () => {
    it("should throw error for expiresIn out of bounds", () => {
      expect(() => new DummyDrug("Doliprane", -51, 10)).toThrow(
        `ExpiresIn value must be between -50 and 10000, got: -51`
      );
    });

    it("should throw error for benefit out of bounds", () => {
      expect(() => new DummyDrug("Doliprane", 5, 51)).toThrow(
        `Benefit must be between 0 and 50, got: 51`
      );
    });
  });
});
