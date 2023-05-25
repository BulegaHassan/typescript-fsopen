import { Diagnose } from "../types";
import diagnoseData from "../../data/diagnoses";

const diagnoses: Diagnose[] = diagnoseData;

const getEntries = () => {
  return diagnoses;
};

export default {
  getEntries,
};
