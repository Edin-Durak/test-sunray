import React, { useState } from "react";

const InputFields = () => {
  const [inputData, setInputData] = useState({
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
  });

  // Generisanje random brojeva
  const generateRandomNumber = (e) => {
    e.preventDefault();
    const baseNumber = Math.floor(Math.random() * 10);
    setInputData({
      numberOne: baseNumber + 10,
      numberTwo: baseNumber - 6,
      numberThree: baseNumber + 15,
      numberFour: baseNumber + 10,
      numberFive: baseNumber + 8,
      numberSix: baseNumber + 18,
      numberSeven: baseNumber + 2,
      numberEight: baseNumber + 4,
      numberNine: baseNumber + 36,
      numberTen: baseNumber - 10,
    });
  };

  // Ručno ažuriranje vrednosti
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // Slanje podataka ili dalja obrada
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Podaci za obradu:", inputData);

    try {
      // Slanje podataka na backend
      const response = await fetch("http://localhost:5000/api/input", {
        method: "POST", // Koristimo POST za slanje podataka
        headers: {
          "Content-Type": "application/json", // Definišemo da šaljemo JSON
        },
        body: JSON.stringify(inputData), // Pretvaramo objekat formData u JSON string
      });

      if (response.ok) {
        // Ako je zahtjev uspješan
        const result = await response.json(); // Čitamo odgovor od backend-a
        console.log("Odgovor sa backend-a:", result);
        alert("Podaci uspješno poslani!");
      } else {
        // Ako je došlo do greške
        console.error("Greška pri slanju podataka:", response.status);
        alert("Došlo je do greške. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Greška u mreži:", error);
      alert("Došlo je do mrežne greške.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
        {Object.keys(inputData).map((key, index) => (
          <input
            key={index}
            type="number"
            className="form-input-field"
            name={key}
            value={inputData[key]}
            onChange={handleChange}
          />
        ))}
      </div>
      <button onClick={generateRandomNumber}>Fill Random Data</button>
      <button type="submit">Sort Data</button>
    </form>
  );
};

export default InputFields;
