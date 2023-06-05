import { v4 as uuidv4 } from "uuid";
import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from "../types";
import patientData from "../../data/patients";
const patients: PatientEntry[] = patientData;

const getEntries = () => {
  console.log(patients);
  return patients;
  
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation,entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
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
const findById = (id: string): PatientEntry | undefined => {
  const entry = patients.find((p) => p.id === id);
  return entry;
};
export default {
  getEntries,
  getNonSensitivePatientEntry,
  addPatient,
  findById,
};
