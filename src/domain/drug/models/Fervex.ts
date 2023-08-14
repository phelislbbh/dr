import Drug from "./BaseDrug";
import { ValidDrugName } from "../constants/drugNames";

export default class Fervex extends Drug {
  constructor(name: ValidDrugName, expiresIn: number, benefit: number) {
    super(name, expiresIn, benefit);
  }

  updateBenefitValue(): void {
    if (this.expiresIn < 6) {
      this.incrementBenefit(3);
    } else if (this.expiresIn < 11) {
      this.incrementBenefit(2);
    } else {
      this.incrementBenefit();
    }

    this.decrementExpiresIn();
    this.handleExpiration();
  }

  // Override the handleExpiration method since Fervex has specific behavior when expired
  handleExpiration(): void {
    if (this.expiresIn < 0) {
      this.benefit = 0;
    }
  }
}
