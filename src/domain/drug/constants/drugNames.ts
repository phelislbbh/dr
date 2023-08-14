// drugNames.ts

export const ALLOWED_DRUG_NAMES = {
  "Herbal Tea": "Herbal Tea",
  Fervex: "Fervex",
  Doliprane: "Doliprane",
  "Magic Pill": "Magic Pill",
  Dafalgan: "Dafalgan",
} as const; // "as const" makes sure the values and properties are read-only

export type ValidDrugName = keyof typeof ALLOWED_DRUG_NAMES;
