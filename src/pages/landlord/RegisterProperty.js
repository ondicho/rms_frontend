import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/styling.css";

const RegisterProperty = () => {
  const navigate = useNavigate();
  const landlordName = useRef();
  const location = useRef();
  const locationUrl = useRef();
  const numberOfBlocks = useRef();
  const numberOfFloors = useRef();
  const unitsPerFloor = useRef(); // Reference for Units per Floor input

  // State variables for floor plan details
  const [unitType, setUnitType] = useState("----");
  const [masterEnsuite, setMasterEnsuite] = useState(false);
  const [numUnits, setNumUnits] = useState(1);
  const [numBathrooms, setNumBathrooms] = useState(1);
  const [rentPerUnit, setRentPerUnit] = useState("");
  const [houseNumbersInput, setHouseNumbersInput] = useState("");
  const [floorPlanDetails, setFloorPlanDetails] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access form values using the references and state variables above
  };

  // Function to add a new floor plan section
  const addNewFloorPlan = () => {
    const enteredUnitsPerFloor = parseInt(unitsPerFloor.current.value, 10);
    if (numUnits <= enteredUnitsPerFloor) {
      const newFloorPlan = {
        unitType,
        numUnits,
        rentPerUnit,
        masterEnsuite,
        numBathrooms,
        houseNumbers: houseNumbersInput.split(",").map((item) => item.trim()),
      };
      setFloorPlanDetails([...floorPlanDetails, newFloorPlan]);
      // Reset the input fields
      setUnitType("----");
      setMasterEnsuite(false);
      setNumBathrooms(1);
      setRentPerUnit("");
      setHouseNumbersInput("");
    } else {
      alert("Number of units exceeds units per floor for this unit type.");
    }
  };
  // Function to handle units per floor change
  const handleUnitsPerFloorChange = (e) => {
    const newUnitsPerFloor = parseInt(e.target.value, 10);
    unitsPerFloor.current.value = newUnitsPerFloor; // Update the Units per Floor input
    setNumUnits(newUnitsPerFloor); // Set the number of units
  };

  return (
    <div className="register-property">
      <h2>Register Property</h2>
      <div className="section-layout">
        {/* Section A */}
        <div className="section-a">
          <div className="form-section">
            <h3>Property Details</h3>
            <div className="form-group">
              <label htmlFor="landlordName" className="form-label">
                Landlord Name
              </label>
              <input
                type="text"
                id="landlordName"
                ref={landlordName}
                placeholder="E.g. John"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                ref={location}
                placeholder="E.g. City, State"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location Url
              </label>
              <input
                type="text"
                id="location"
                ref={location}
                placeholder="E.g. City, State"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="numberOfBlocks" className="form-label">
                Number of Blocks
              </label>
              <input
                type="number"
                id="numberOfBlocks"
                ref={numberOfBlocks}
                placeholder="E.g. 3"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="floorsPerBlock" className="form-label">
                Floors per Block
              </label>
              <input
                type="number"
                id="floorsPerBlock"
                ref={numberOfFloors}
                placeholder="E.g. 5"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="unitsPerFloor" className="form-label">
                Units per Floor
              </label>
              <input
                type="number"
                id="unitsPerFloor"
                ref={unitsPerFloor}
                placeholder="E.g. 5"
                required
                className="form-input"
                onChange={handleUnitsPerFloorChange}
              />
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className="section-b">
          <div className="form-section">
            <h3>Floor Details</h3>
            <h6>Unit Types</h6>
            <div className="form-group">
              <label htmlFor="unitType" className="form-label">
                Unit Type
              </label>
              <select
                id="unitType"
                value={unitType}
                onChange={(e) => setUnitType(e.target.value)}
                className="form-input"
              >
                <option value="----">----</option>
                <option value="Studio">Studio</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
                <option value="4 Bedroom">4 Bedroom</option>
              </select>

              <label htmlFor="numUnits" className="form-label">
                No of Units
              </label>
              <input
                type="number"
                id="numUnits"
                value={numUnits}
                onChange={(e) => setNumUnits(e.target.value)}
                className="form-input"
              />

              <label htmlFor="rentPerUnit" className="form-label">
                Rent Per Unit
              </label>
              <input
                type="number"
                id="rentPerUnit"
                value={rentPerUnit}
                onChange={(e) => setRentPerUnit(e.target.value)}
                placeholder="E.g. 1000"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="houseNumbersInput" className="form-label">
                House Numbers
              </label>
              <input
                type="text"
                id="houseNumbersInput"
                value={houseNumbersInput}
                onChange={(e) => setHouseNumbersInput(e.target.value)}
                placeholder={`E.g. A1,A2,A3`}
                required
                className="form-input"
              />
              <label htmlFor="numBathrooms" className="form-label">
                No of Bathrooms
              </label>
              <input
                type="number"
                id="numBathrooms"
                value={numBathrooms}
                onChange={(e) => setNumBathrooms(e.target.value)}
                className="form-input"
              />

              <label htmlFor="masterEnsuite" className="form-label">
                Master Ensuite
              </label>
              <input
                type="checkbox"
                id="masterEnsuite"
                checked={masterEnsuite}
                onChange={(e) => setMasterEnsuite(e.target.checked)}
              />


            </div>
            <span className="helper-text">(Enter {numUnits} house numbers)</span>
            <div className="increment-group">
              <i className="fa fa-plus" style={{ float: "right" }} onClick={addNewFloorPlan}></i>
            </div>
            <br />
            <div className="floor-plan-details">
              {floorPlanDetails.map((floorPlan, index) => (
                <div key={index} className="floor-plan-card">
                  {/* Card-like structure */}
                  <div className="floor-plan-section">
                    <h6>Unit Type {index + 1}</h6>
                    <p>Unit Type: {floorPlan.unitType}</p>
                    <p>No of Units: {floorPlan.numUnits}</p>
                    <p>Rent Per Unit: ${floorPlan.rentPerUnit}</p>
                    <p>House Numbers: {floorPlan.houseNumbers.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <button type="submit" className="submit-button"  style={{ float: "right" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterProperty;
