import React, { useRef, useState, useEffect } from "react";
import "./../../assets/styling.css";
import FloorPlanModal from "./FloorPlanModal";

const UpdatedRegisterProperty = () => {
  // State variables for property details
  const [landlordName, setLandlordName] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [numBlocks, setNumBlocks] = useState(1);

  const [blocks, setBlocks] = useState([]);
  const unitsPerFloor = useRef();

  // State variables for block details
  const [newBlockName, setNewBlockName] = useState("");
  const [newBlockFloors, setNewBlockFloors] = useState(1);

  // State variables for floor plan details
  const [unitTypes, setUnitTypes] = useState([
    { type: "----", count: 1 }, // Default unit type
  ]);

  const [unitType, setUnitType] = useState("----");
  const [masterEnsuite, setMasterEnsuite] = useState(false);
  const [numUnits, setNumUnits] = useState(1);
  const [numBathrooms, setNumBathrooms] = useState(0);
  const [rentPerUnit, setRentPerUnit] = useState("");
  const [houseNumbersInput, setHouseNumbersInput] = useState("");
  const [floorPlanDetails, setFloorPlanDetails] = useState([]);

  // State to track the number of blocks to create
  const [blocksToCreate, setBlocksToCreate] = useState(1);

  // State to control the "Create Block" modal visibility
  const [isCreateBlockModalOpen, setIsCreateBlockModalOpen] = useState(false);

  // Function to open the "Create Block" modal
  const openCreateBlockModal = () => {
    setIsCreateBlockModalOpen(true);
  };

  // Function to close the "Create Block" modal
  const closeCreateBlockModal = () => {
    setIsCreateBlockModalOpen(false);
  };

  // Function to add a new block
  const addNewBlock = () => {
    if (newBlockName.trim() === "") {
      alert("Block name cannot be empty.");
      return;
    }

    if (floorPlanDetails.length !== newBlockFloors) {
      alert("Number of floor plans should match the number of floors.");
      return;
    }

    const newBlock = {
      name: newBlockName,
      numberOfFloors: newBlockFloors,
      floors: floorPlanDetails,
    };

    // Prepare a comma-separated string of unit types
    const unitTypeString = unitTypes.map((unit) => unit.type).join(", ");
    newBlock.unitTypes = unitTypeString;

    closeCreateBlockModal();

    setBlocks([...blocks, newBlock]);
    setNewBlockName("");
    setNewBlockFloors(1);
    setFloorPlanDetails([]); // Clear floor plan details
  };

  // Function to add a new floor to a block
  const addNewFloor = (blockIndex) => {
    const updatedBlocks = [...blocks];
    const block = updatedBlocks[blockIndex];

    if (block.floors.length >= block.numberOfFloors) {
      alert("You have reached the maximum number of floors for this block.");
      return;
    }

    block.floors.push({
      unitType,
      numUnits,
      rentPerUnit,
      masterEnsuite,
      numBathrooms,
      houseNumbers: houseNumbersInput.split(",").map((item) => item.trim()),
    });

    setBlocks(updatedBlocks);
  };

  // Function to handle units per floor change
  const handleUnitsPerFloorChange = (e) => {
    const newUnitsPerFloor = parseInt(e.target.value, 10);
    unitsPerFloor.current.value = newUnitsPerFloor; // Update the Units per Floor input
    setNumUnits(newUnitsPerFloor); // Set the number of units
  };

  // Function to handle unit type change
  const handleUnitTypeChange = (index, type) => {
    const updatedUnitTypes = [...unitTypes];
    updatedUnitTypes[index].type = type;
    setUnitTypes(updatedUnitTypes);
  };

  // Function to save floor plan details
  const saveUnitTypeDetails = (newFloorPlan) => {
    console.log("Saving floor plan details:", newFloorPlan);
    closeModal();
  };

  // Function to remove a floor from a block
  const removeFloor = (blockIndex, floorIndex) => {
    const updatedBlocks = [...blocks];
    const block = updatedBlocks[blockIndex];
    block.floors.splice(floorIndex, 1);
    setBlocks(updatedBlocks);
  };

  // Effect to update the number of blocks to create based on input
  useEffect(() => {
    const numToCreate = numBlocks - blocks.length;
    setBlocksToCreate(numToCreate > 0 ? numToCreate : 1);
    // Open the "Create Block" modal when necessary
    if (numToCreate > 0) {
      setIsCreateBlockModalOpen(true);
    }
  }, [numBlocks, blocks]);

  return (
    <div className="register-property">
      <h2>Register Property</h2>
      <div className="section-layout">
        {/* Section A - Property Details */}
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
                value={landlordName}
                onChange={(e) => setLandlordName(e.target.value)}
                placeholder="E.g. John"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertyName" className="form-label">
                Property Name
              </label>
              <input
                type="text"
                id="propertyName"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                placeholder="E.g. Star Apartments"
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="E.g. City, State"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="locationUrl" className="form-label">
                Location Url
              </label>
              <input
                type="text"
                id="locationUrl"
                value={locationUrl}
                onChange={(e) => setLocationUrl(e.target.value)}
                placeholder="E.g. City, State"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="numBlocks" className="form-label">
                Number of Blocks
              </label>
              <input
                type="number"
                id="numBlocks"
                value={numBlocks}
                onChange={(e) => setNumBlocks(e.target.value)}
                placeholder="E.g. 1"
                required
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Section B - Block Details */}
        <div className="section-b">
          <h6>Block Details</h6>
          <div className="saved-blocks">
            <span className="helper-text">Saved blocks</span>
            {blocks.length === 0 ? (
              // Display the "Create new block" card if there are no saved blocks
              <div className="floor-plan-card">
                <div className="floor-plan-section">
                  <i className="fa fa-plus" onClick={openCreateBlockModal}></i>
                  <span className="helper-text">Create a new block</span>
                </div>
              </div>
            ) : (
              // Display cards for each saved block
              blocks.map((block, index) => (
                <div key={index} className="floor-plan-card">
                  <div className="floor-plan-section">
                    <p>Block Name: {block.name}</p>
                    <p>Number of floors: {block.numberOfFloors}</p>
                    <p>Total Units: {block.numberOfFloors * block.floors.length}</p>
                    <p>Unit Types: {block.unitTypes}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="add-block">
            {blocksToCreate && isCreateBlockModalOpen && (
              // Display the "Create Block" form if the modal is open
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="newBlockName" className="form-label">
                    Block Name
                  </label>
                  <input
                    type="text"
                    id="newBlockName"
                    value={newBlockName}
                    onChange={(e) => setNewBlockName(e.target.value)}
                    placeholder="E.g. Block A"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newBlockFloors" className="form-label">
                    Number of Floors
                  </label>
                  <input
                    type="number"
                    id="newBlockFloors"
                    value={newBlockFloors}
                    onChange={(e) => setNewBlockFloors(e.target.value)}
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
                <div className="unit-types">
                  {unitTypes.map((unit, index) => (
                    <div key={index} className="unit-type-input">
                      <label htmlFor={`unitType${index}`} className="form-label">
                        Unit Type {index + 1}
                      </label>
                      <select
                        id={`unitType${index}`}
                        value={unit.type}
                        onChange={(e) => handleUnitTypeChange(index, e.target.value)}
                        className="form-input"
                      >
                        <option value="----">----</option>
                        <option value="Studio">Studio</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedroom">2 Bedroom</option>
                        <option value="3 Bedroom">3 Bedroom</option>
                        <option value="4 Bedroom">4 Bedroom</option>
                      </select>
                      {unitTypes.length > 1 && (
                        <i
                          className="fa fa-trash remove-unit-type"
                          onClick={() => removeUnitType(index)}
                        ></i>
                      )}
                    </div>
                  ))}
                  <div className="call-to-action">
                    <i className="fa fa-plus add-button" onClick={addUnitType}></i>
                    <span className="helper-text">Add Unit Type</span>
                  </div>
                </div>
                <div className="call-to-action">
                  <i className="fa fa-plus add-button" onClick={openModal}></i>
                  <span className="helper-text">Add Floor Details</span>
                </div>

                <br />
                <div className="floor-plan-details">
                  {floorPlanDetails.map((floorPlan, index) => (
                    <div key={index} className="floor-plan-card">
                      {/* Card-like structure */}
                      <div className="floor-plan-section">
                        <h6>Floor {index + 1} Plan </h6>
                        <p>Unit Type: {floorPlan.unitType}</p>
                        <p>No of Units: {floorPlan.numUnits}</p>
                        <p>Rent Per Unit: ${floorPlan.rentPerUnit}</p>
                        <p>House Numbers: {floorPlan.houseNumbers.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <button type="submit" className="save-block" onClick={addNewBlock}>
                  Save Block
                </button>
              </div>
            )}

            {isModalOpen && (
              <FloorPlanModal
                closeModal={closeModal}
                saveUnitTypeDetails={saveUnitTypeDetails}
                floorPlanDetails={floorPlanDetails}
                updateFloorPlanDetails={(updatedDetails) => setFloorPlanDetails(updatedDetails)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="form">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdatedRegisterProperty;
