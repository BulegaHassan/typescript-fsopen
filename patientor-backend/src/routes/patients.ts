import express from "express";
import patientService from "../services/patientService";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitivePatientEntry());
});

router.post("/", (req, res) => {
  const { name, ssn, dateOfBirth, gender, occupation } = req.body;
  const newPatientEntry = patientService.addPatient({
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation,
  });
  res.status(201).json(newPatientEntry);
});

export default router;
