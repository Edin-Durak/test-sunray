import React, { useEffect, useState } from "react";

const ResultsFields = () => {
  const [results, setResults] = useState({
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

  // Funkcija za dobijanje podataka sa backend-a
  const fetchResults = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/input"); // URL za API
      if (response.ok) {
        const data = await response.json(); // Parsiranje odgovora u JSON
        setResults(data); // Postavljanje rezultata u state
      } else {
        console.error("Greška prilikom dobijanja podataka:", response.status);
      }
    } catch (error) {
      console.error("Mrežna greška:", error);
    }
  };

  // Pozivanje fetch funkcije kada se komponenta mount-uje
  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <div className="results-container">
        <div className="results-header">
          <div className="additional-filter">
            <h4>Additional Filter</h4>
            <form action="" className="filter-inputs">
              <input type="text" pattern="[< > =]{1}" />
              <input type="number" />
              <input type="checkbox" />
            </form>
          </div>
        </div>
        <h2>Results</h2>
      </div>
      <div className="results-content">
        {Object.keys(results).map((key, index) => (
          <input
            key={index}
            type="number"
            disabled
            className="form-input-field"
            name={key}
            value={results[key]} // Prikaz podataka iz state-a
          />
        ))}
      </div>
    </>
  );
};

export default ResultsFields;
