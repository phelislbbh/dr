import { ValidDrugName } from "../constants/drugNames";
import Drug from "./BaseDrug";

export default class HerbalTea extends Drug {
  constructor(name: ValidDrugName, expiresIn: number, benefit: number) {
    // Provide the hardcoded name "Herbal Tea" to the superclass constructor
    super(name, expiresIn, benefit);
  }

  // Override the updateBenefitValue method to provide specific behavior for Herbal Tea
  updateBenefitValue(): void {
    // Every day, benefit of Herbal Tea increases by 1
    this.incrementBenefit();

    // Decrease the expiresIn value for Herbal Tea
    this.decrementExpiresIn();

    // Once Herbal Tea expires, its benefit increases by 1
    if (this.expiresIn < 0) {
      this.incrementBenefit();
    }
  }
}
