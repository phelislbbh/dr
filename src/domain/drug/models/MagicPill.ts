import { ValidDrugName } from "../constants/drugNames";
import Drug from "./BaseDrug";

export default class MagicPill extends Drug {
  constructor(name: ValidDrugName, expiresIn: number, benefit: number) {
    super(name, expiresIn, benefit);
  }

  // Override the base class method for the specific behavior of Magic Pill
  updateBenefitValue(): void {
    // For Magic Pill, we don't modify the benefit or expiresIn values.
    // So, this method is intentionally left blank.
  }
}
