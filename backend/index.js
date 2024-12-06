const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST ruta za primanje podataka
app.post("/api/input", (req, res) => {
  const inputData = req.body;

  res.status(200).json({
    message: "Podaci uspješno primljeni!",
    receivedData: inputData,
  });
});

// GET ruta za slanje podataka
app.get("/api/input", (req, res) => {
  // Simulirani podaci koji se šalju frontend-u
  const simulatedData = {
    numberOne: "",
    numberTwo: "",
    numberThree: "",
    numberFour: "",
    numberFive: "",
    numberSix: "",
    numberSeven: "",
    numberEight: "",
    numberNine: "",
    numberTen: "",
  };

  res.status(200).json(simulatedData);
});

// Pokretanje servera
app.listen(port, () => {
  console.log(`Server radi na http://localhost:${port}`);
});
