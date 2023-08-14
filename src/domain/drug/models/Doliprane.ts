import Drug from "./BaseDrug";
import { ValidDrugName } from "../constants/drugNames";

export default class Doliprane extends Drug {
  constructor(name: ValidDrugName, expiresIn: number, benefit: number) {
    super(name, expiresIn, benefit);
  }

  // Override the updateBenefitValue method to provide the default behavior for Doliprane
  updateBenefitValue(): void {
    // Every day, benefit of Doliprane decreases by 1
    this.decrementBenefit();

    // Decrease the expiresIn value for Doliprane
    this.decrementExpiresIn();

    // Once Doliprane expires, its benefit decreases by an additional 1 (i.e., total decrease of 2)
    if (this.expiresIn < 0) {
      this.decrementBenefit();
    }
  }
}
