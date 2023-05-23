interface BmiParams {
  h: number;
  w: number;
}

const parseArguments = (args: string[]): BmiParams => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      h: Number(args[2]),
      w: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const calculateBmi = (h: number, w: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  h = h / 100;
  h = h * h;
  const bmi = w / h;
  if (bmi < 18.5) {
    return "Underweight (thin)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight (Pre-obese)";
  } else {
    return "Obese (Unhealthy weight)";
  }
};
try {
  const { h, w } = parseArguments(process.argv);
  calculateBmi(h, w);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export default calculateBmi;
