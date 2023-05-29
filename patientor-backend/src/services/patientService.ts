import { v4 as uuidv4 } from "uuid";
import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from "../types";
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

const addPatient = (patient: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuidv4(),
    ...patient,
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  getNonSensitivePatientEntry,
  addPatient,
};
