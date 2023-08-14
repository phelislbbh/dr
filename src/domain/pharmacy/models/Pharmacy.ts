import Drug from "../../drug/models/BaseDrug";

export default class Pharmacy {
  private drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    drugs.forEach((drug) => {
      if (!(drug instanceof Drug)) {
        throw new Error(`Invalid Drug object: ${JSON.stringify(drug)}`);
      }
    });
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs.forEach((drug) => {
      drug.updateBenefitValue();
    });

    return this.drugs;
  }
}
