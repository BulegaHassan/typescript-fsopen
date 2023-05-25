import { PatientEntry, NonSensitivePatientEntry } from "../types";
import patientData from "../../data/patients";
const patients: PatientEntry[] = patientData;

const getEntries = () => {
  return patients;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getEntries,
  getNonSensitivePatientEntry
};
