import { Patient } from "../../types";
import { useParams } from "react-router-dom";
import {Male,Female} from '@mui/icons-material'
interface Props {
  patients: Patient[];
}
const PatientInfo = ({ patients }: Props) => {
  const id = useParams().id;
  const patient = patients.find((p) => p.id === id);

  return (
    <div>
      <h2>
        {patient?.name} {patient?.gender === 'male' ? <Male/> : <Female/>}
      </h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
    </div>
  );
};
export default PatientInfo;
