import Pharmacy from "../../src/domain/pharmacy/models/Pharmacy";
import HerbalTea from "../../src/domain/drug/models/HerbalTea";
import Fervex from "../../src/domain/drug/models/Fervex";
import Dafalgan from "../../src/domain/drug/models/Dafalgan";
import Doliprane from "../../src/domain/drug/models/Doliprane";

describe("Pharmacy", () => {
  describe("updateBenefitValue", () => {
    it("should update HerbalTea correctly", () => {
      const herbalTea = new HerbalTea("Herbal Tea", 0, 10);
      const pharmacy = new Pharmacy([herbalTea]);
      pharmacy.updateBenefitValue();
      expect(herbalTea.benefit).toBe(12); // Benefit should increase by 2
      expect(herbalTea.expiresIn).toBe(-1); // expiresIn should increase by 1
    });

    it("should update Fervex correctly", () => {
      const fervex = new Fervex("Fervex", 5, 10);
      const pharmacy = new Pharmacy([fervex]);
      pharmacy.updateBenefitValue();
      expect(fervex.benefit).toBe(13); // Increment by 3 when less than 6 days
      expect(fervex.expiresIn).toBe(4); // expiresIn should decrease by 1
    });

    it("should update Dafalgan correctly", () => {
      const dafalgan = new Dafalgan("Dafalgan", 5, 10);
      const pharmacy = new Pharmacy([dafalgan]);
      pharmacy.updateBenefitValue();
      expect(dafalgan.benefit).toBe(8); // Decrease by 2
      expect(dafalgan.expiresIn).toBe(4); // expiresIn should decrease by 1
    });

    it("should handle expired drugs", () => {
      // Example for default behavoir, such as Doliprane
      const doliprane = new Doliprane("Doliprane", 0, 10);
      const pharmacy = new Pharmacy([doliprane]);
      pharmacy.updateBenefitValue();
      expect(doliprane.benefit).toBe(8);
      expect(doliprane.expiresIn).toBe(-1); // expiresIn should decrease even after expiration
    });
  });
});
