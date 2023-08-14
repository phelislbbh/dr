import { ValidDrugName, ALLOWED_DRUG_NAMES } from "../constants/drugNames";
const ALLOWED_DRUG_NAMES_SET = new Set(Object.values(ALLOWED_DRUG_NAMES));

export default abstract class Drug {
  constructor(
    public name: ValidDrugName,
    public expiresIn: number,
    public benefit: number
  ) {
    this.validateInput();
  }

  // This method will be overridden by derived classes to provide specific logic.
  abstract updateBenefitValue(): void;

  // Utility methods to increment and decrement benefit with bounds check
  protected incrementBenefit(amount: number = 1): void {
    this.benefit = Math.min(50, this.benefit + amount);
  }

  protected decrementBenefit(amount: number = 1): void {
    this.benefit = Math.max(0, this.benefit - amount);
  }

  // Common logic for all drugs to decrement expiresIn
  decrementExpiresIn(): void {
    this.expiresIn -= 1;
  }

  // Default behavior for expired drugs, which can be overridden by derived classes if necessary
  handleExpiration(): void {
    if (this.expiresIn < 0) {
      this.decrementBenefit();
    }
  }

  // Validation logic which is common for all drugs
  protected validateInput() {
    if (typeof this.name !== "string" || this.name.length === 0) {
      throw new Error(`Invalid name: ${this.name}`);
    }
    if (this.expiresIn < -50 || this.expiresIn > 10000) {
      throw new Error(
        `ExpiresIn value must be between -50 and 10000, got: ${this.expiresIn}`
      );
    }
    if (this.benefit < 0 || this.benefit > 50) {
      throw new Error(`Benefit must be between 0 and 50, got: ${this.benefit}`);
    }
  }

  protected validateDrugName(): void {
    if (!ALLOWED_DRUG_NAMES_SET.has(this.name)) {
      throw new Error(`Invalid drug name: ${this.name}.`);
    }
  }
}
