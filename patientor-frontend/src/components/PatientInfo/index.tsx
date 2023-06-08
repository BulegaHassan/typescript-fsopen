import { Patient, Entry } from "../../types";
import { useParams } from "react-router-dom";
import { Male, Female } from "@mui/icons-material";
interface Props {
  patients: Patient[];
}
const PatientInfo = ({ patients }: Props) => {
  const id = useParams().id;
  const patient = patients.find((p) => p.id === id);
  const ourEntries = patient?.entries;

  return (
    <div>
      <h2>
        {patient?.name} {patient?.gender === "male" ? <Male /> : <Female />}
      </h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <h3>entries</h3>
      {ourEntries &&
        ourEntries.map((entry: Entry) => (
          <div key={entry.id}>
            <p>
              {entry.date}
              <i> {entry.description}</i>
            </p>
            {entry.diagnosisCodes && entry.diagnosisCodes.length > 0 && (
              <div>
                <ul>
                  {entry.diagnosisCodes.map((code) => (
                    <li key={code}>{code}</li>
                  ))}
                </ul>
              </div>
            )}

            {entry.type === "HealthCheck" && (
              <>
                <p>Health Check Rating: {entry.healthCheckRating}</p>
              </>
            )}
            {entry.type === "Hospital" && (
              <p>
                {entry.discharge.date} {entry.discharge.criteria}
              </p>
            )}
            {entry.type === "OccupationalHealthcare" && (
              <>
                <p>Employer: {entry.employerName}</p>
                <p>Start Date: {entry.sickLeave?.startDate}</p>
                <p>End Date: {entry.sickLeave?.endDate}</p>
              </>
            )}
            <hr />
          </div>
        ))}
      <p></p>
    </div>
  );
};
export default PatientInfo;
