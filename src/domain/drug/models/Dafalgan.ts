import Drug from "./BaseDrug";
import { ValidDrugName } from "../constants/drugNames";

export default class Dafalgan extends Drug {
  constructor(name: ValidDrugName, expiresIn: number, benefit: number) {
    // Provide the hardcoded name "Dafalgan" to the superclass constructor
    super(name, expiresIn, benefit);
  }

  // Override the updateBenefitValue method to provide specific behavior for Dafalgan
  updateBenefitValue(): void {
    // Every day, benefit of Dafalgan decreases by 2 (degrades twice as fast)
    this.decrementBenefit(2);

    // Decrease the expiresIn value for Dafalgan
    this.decrementExpiresIn();

    // Once Dafalgan expires, its benefit decreases by an additional 2 (for a total decrease of 4 per day after expiration)
    if (this.expiresIn < 0) {
      this.decrementBenefit(2);
    }
  }
}
