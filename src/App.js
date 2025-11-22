import React, { useState } from "react";
import petsData from "./data";
import PetList from "./components/PetList";

function App() {
  // State for currently selected animal type ("All" by default)
  const [selectedAnimal, setSelectedAnimal] = useState("All");

  // Distinct animal types for the filter dropdown
  const animalTypes = ["All", ...new Set(petsData.map((pet) => pet.animal))];

  // Handle changes in the dropdown filter
  const handleAnimalChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold">
            Favorite Animal Gallery
          </span>
        </div>
      </nav>

      <div className="container">
        {/* Header and filter row */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h1 className="mb-3">Animal Explorer</h1>
            <p className="text-muted">
              Choose a favorite animal from the list. Use the dropdown to
              filter by animal type and the search box for case-insensitive
              matching on the animal field.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-md-end">
            {/* Animal filter dropdown */}
            <div className="mb-3 mb-md-0">
              <label htmlFor="animalFilter" className="form-label">
                Filter by animal type
              </label>
              <select
                id="animalFilter"
                className="form-select"
                value={selectedAnimal}
                onChange={handleAnimalChange}
              >
                {animalTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pet list component */}
        <PetList pets={petsData} selectedAnimal={selectedAnimal} />
      </div>
    </div>
  );
}

export default App;