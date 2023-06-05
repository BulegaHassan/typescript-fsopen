export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}
export interface PatientEntry {
  id: string;
  ssn: string;
  name: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn" | "entries">;
export type NewPatientEntry = Omit<PatientEntry, "id" >;
