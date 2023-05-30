import { TotalProps } from "../types";
const Total = (props: TotalProps) => {
  const totalExercises = props.courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0
  );
  return <p>Number of exercises {totalExercises}</p>;
};
export default Total;
