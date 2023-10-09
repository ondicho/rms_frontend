import React, { useRef, useState } from "react";
import "./../../assets/styling.css";
import FloorPlanModal from "./FloorPlanModal";

const UpdatedRegisterProperty = () => {
    // State variables for property details
    const [landlordName, setLandlordName] = useState("");
    const [location, setLocation] = useState("");
    const [locationUrl, setLocationUrl] = useState("");
    const [blocks, setBlocks] = useState([]);
    const unitsPerFloor = useRef();

    // State variables for block details
    const [newBlockName, setNewBlockName] = useState("");
    const [newBlockFloors, setNewBlockFloors] = useState(1);

    // State variables for floor plan details
    const [unitType, setUnitType] = useState("----");
    const [masterEnsuite, setMasterEnsuite] = useState(false);
    const [numUnits, setNumUnits] = useState(1);
    const [numBathrooms, setNumBathrooms] = useState(1);
    const [rentPerUnit, setRentPerUnit] = useState("");
    const [houseNumbersInput, setHouseNumbersInput] = useState("");
    const [floorPlanDetails, setFloorPlanDetails] = useState([]);

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

        const newBlock = {
            name: newBlockName,
            numberOfFloors: newBlockFloors,
            floors: floorPlanDetails, // Store floor plan details
        };

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
            unitType: "----",
            numUnits: 1,
            rentPerUnit: "",
            masterEnsuite: false,
            numBathrooms: 1,
            houseNumbers: [],
        });

        setBlocks(updatedBlocks);
    };

    // Function to handle units per floor change
    const handleUnitsPerFloorChange = (e) => {
        const newUnitsPerFloor = parseInt(e.target.value, 10);
        unitsPerFloor.current.value = newUnitsPerFloor; // Update the Units per Floor input
        setNumUnits(newUnitsPerFloor); // Set the number of units
    };

    // Function to remove a floor from a block
    const removeFloor = (blockIndex, floorIndex) => {
        const updatedBlocks = [...blocks];
        const block = updatedBlocks[blockIndex];
        block.floors.splice(floorIndex, 1);
        setBlocks(updatedBlocks);
    };

    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                    </div>
                </div>

                {/* Section B - Block Details */}
                <div className="section-b">

                    <h6>Block Details</h6>
                    <div className="saved-blocks">
                        <span className="helper-text">Saved blocks</span>
                        {blocks.length === 0 ? ( // Check if there are no saved blocks
                            <div className="floor-plan-card">
                                {/* Display a card with the fa-plus icon */}
                                <div className="floor-plan-section">
                                    <i className="fa fa-plus" onClick={openCreateBlockModal}></i>
                                    <span className="helper-text">Create a new block</span>
                                </div>
                            </div>
                        ) : (
                            // Display cards for each saved block
                            blocks.map((block, index) => (
                                <div key={index} className="floor-plan-card">
                                    {/* Card-like structure */}
                                    <div className="floor-plan-section">
                                        <p>Block Name: {block.name}</p>
                                        <p>Number of floors: {block.numberOfFloors}</p>
                                        <p>Total Units: {block.numberOfFloors * block.floors.length}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="add-block">
                        <span className="helper-text">Create new block</span>
                        <button className="fa fa-plus add-button" onClick={openCreateBlockModal}></button>
                        {isCreateBlockModalOpen && (

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
                                {/* Call to Action Button */}
                                <div className="call-to-action">
                                    <button className="fa fa-plus add-button" onClick={openModal}></button>
                                    <span className="helper-text">Add Floor Details</span>
                                </div>

                                <br></br>
                                <button type="submit" className="save-block" onClick={addNewBlock}>
                                    save block
                                </button>

                            </div>
                        )}

                        <div className="floor-plan-details">
                            {floorPlanDetails.map((floorPlan, index) => (
                                <div key={index} className="floor-plan-card">
                                    {/* Card-like structure */}
                                    <div className="floor-plan-section">
                                        <h6>Block Name: {blocks.name}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <br></br>



                        {/* Floor Plan Modal */}
                        {isModalOpen && (
                            <FloorPlanModal closeModal={closeModal} /* Pass any required props here */ />
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
