import React, { useState } from "react";

function PetList({ pets, selectedAnimal }) {
  // Local state for the search text
  const [searchTerm, setSearchTerm] = useState("");

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Convert search term to lowercase for case-insensitive comparison
  const normalizedSearch = searchTerm.toLowerCase();

  // First filter: by selected animal (from App)
  // Second filter: by case-insensitive search on the 'animal' field
  const filteredPets = pets
    .filter((pet) => {
      if (selectedAnimal === "All") {
        return true;
      }
      return pet.animal === selectedAnimal;
    })
    .filter((pet) => {
      return pet.animal.toLowerCase().includes(normalizedSearch);
    });

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-3">Favorite Animals</h2>

        {/* Search input box */}
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search by animal type
          </label>
          <input
            id="search"
            type="text"
            className="form-control"
            placeholder="Example: dog, cat, fish..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Responsive table of pets */}
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Animal</th>
                <th scope="col">Specialty</th>
              </tr>
            </thead>
            <tbody>
              {filteredPets.map((pet) => (
                <tr key={pet.id}>
                  <td>
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      className="img-thumbnail"
                      style={{ maxWidth: "90px" }}
                    />
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.animal}</td>
                  <td>{pet.specialty}</td>
                </tr>
              ))}

              {/* Message when no pets match the criteria */}
              {filteredPets.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No animals found matching the current criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PetList;