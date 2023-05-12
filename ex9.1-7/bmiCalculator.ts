const calculateBmi = (h: number, w: number): string  => {
    h = h / 100
    h = h * h
  const bmi = w / h
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
console.log(calculateBmi(185, 40));
console.log(calculateBmi(180, 67));
console.log(calculateBmi(180, 89));
console.log(calculateBmi(180, 139));
