import Drug from "../domain/drug/models/BaseDrug";
import Doliprane from "../domain/drug/models/Doliprane";
import HerbalTea from "../domain/drug/models/HerbalTea";
import Fervex from "../domain/drug/models/Fervex";
import MagicPill from "../domain/drug/models/MagicPill";
import Pharmacy from "../domain/pharmacy/models/Pharmacy";
import { promises as fs } from "node:fs";

const TOTAL_DAYS = 30;

const initialDrugs: Drug[] = [
  new Doliprane("Doliprane", 20, 30),
  new HerbalTea("Herbal Tea", 10, 5),
  new Fervex("Fervex", 12, 35),
  new MagicPill("Magic Pill", 15, 40),
];

function simulatePharmacyOperations(
  days: number,
  pharmacy: Pharmacy
): object[] {
  const log: object[] = [];

  for (let elapsedDays = 0; elapsedDays < days; elapsedDays++) {
    log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
  }

  return log;
}

async function writeLogToFile(filename: string, log: object[]): Promise<void> {
  try {
    await fs.writeFile(
      filename,
      JSON.stringify({ result: log }, null, 2).concat("\n")
    );
    console.log("success");
  } catch (error) {
    console.error("error writing to file:", error);
  }
}

const pharmacy = new Pharmacy(initialDrugs);
const log = simulatePharmacyOperations(TOTAL_DAYS, pharmacy);

writeLogToFile("output.json", log);
