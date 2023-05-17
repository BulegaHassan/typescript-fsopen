const express = require("express");

const app = express();
import calculateBmi from "./bmiCalculator";

app.get("/hello", (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello Full Stack!");
});
app.get("/bmi", (req: any, res: any) => {
  try {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    const bmi = calculateBmi(height, weight);
    if (!isNaN(height) && !isNaN(weight)) {
      res.status(200).json({
        weight,
        height,
        bmi,
      });
    } else {
      throw new Error("Provided values were not numbers!");
    }
  } catch (error) {
    res.status(500).json({ error: "malformatted parameters" });
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
