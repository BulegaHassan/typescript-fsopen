export interface resultsObject {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}
export const calculateExercises = (
  target: number,
  arr: number[]
): resultsObject => {
  const periodLength = arr.length;
  const trainingDays = arr.length - 2;

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / periodLength;
  let success: boolean;
  if (average >= target) {
    success = true;
  } else {
    success = false;
  }
  let rating: number = 0;
  if (average <= 0.5 * target) rating = 1;
  if (average > 0.5 * target && average < target) rating = 2;
  if (average >= target) rating = 3;
  let ratingDescription: string = "";
  if (rating < 2) ratingDescription = "Not good, double your efforts";
  if (rating < 3) ratingDescription = "Not too bad but could be better";
  if (rating >= 3) ratingDescription = "Very good, keep it up";
  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingDescription,
  };
};
// if (process.argv.length < 4) {
//   console.log(
//     "Please provide target and exercise hours for each day as command line arguments"
//   );
//   process.exit(1);
// }
// const target = Number(process.argv[2]);
// const arr = process.argv.slice(3).map(Number);

// if (isNaN(target) || arr.some(isNaN)) {
//   console.log("Provided values are not numbers");
//   process.exit(1);
// }
// console.log(calculateExercises(target, arr));
