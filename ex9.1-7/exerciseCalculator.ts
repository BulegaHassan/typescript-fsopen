interface resultsObject {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}
const calculateExercises = (arr: number[], target: number): resultsObject => {
  if (arr.length !== 7)
    throw new Error("The array should have values for only a full week(7 values)");
  const periodLength = arr.length;
  const trainingDays = arr.length - 2;

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  let success: boolean;
  if (average >= target) {
    success = true;
  } else {
    success = false;
  }
  let rating: number;
  if (average <= 0.5 * target) rating = 1;
  if (average > 0.5 * target && average < target) rating = 2;
  if (average >= target) rating = 3;
  let ratingDescription: string;
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

console.log(calculateExercises([4,0,4,0,2,2,2], 2));
