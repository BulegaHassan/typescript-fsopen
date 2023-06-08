export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}
export type Discharge = {
  date: string;
  criteria: string;
};
export type SickLeave = {
  startDate: string;
  endDate: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}
interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}
interface HospitalCheck extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}
interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}
export type Entry =
  | HealthCheckEntry
  | HospitalCheck
  | OccupationalHealthcareEntry;
export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries:[]
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;
