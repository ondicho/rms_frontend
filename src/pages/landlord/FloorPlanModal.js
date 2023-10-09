import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../../assets/styling.css";

const FloorPlanModal = ({ closeModal, saveUnitTypeDetails , floorPlanDetails, updateFloorPlanDetails }) => {
    const [unitType, setUnitType] = useState("----");
    const [masterEnsuite, setMasterEnsuite] = useState(false);
    const [numUnits, setNumUnits] = useState(1);
    const [numBathrooms, setNumBathrooms] = useState(0);
    const [rentPerUnit, setRentPerUnit] = useState("");
    const [houseNumbersInput, setHouseNumbersInput] = useState("");
    const [validationError, setValidationError] = useState("");

    const handleSaveUnitTypeDetails = () => {
        const newFloorPlan = {
            unitType,
            numUnits,
            rentPerUnit,
            masterEnsuite,
            numBathrooms,
            houseNumbers: houseNumbersInput.split(",").map((item) => item.trim()),
        };
        // Update the floorPlanDetails in the parent component
        updateFloorPlanDetails([...floorPlanDetails, newFloorPlan]);

        saveUnitTypeDetails(newFloorPlan);

        // Close the modal
        closeModal();
    };

    return (
        <div className="floor-plan-modal-overlay">
            <div className="floor-plan-modal">
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>
                        &times;
                    </button>
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

                        {/* <span className="helper-text">(Enter {numUnits} house numbers)</span> */}
                        <div className="increment-group">
                            <i
                                className="fa fa-plus add-button"
                                style={{ float: "right" }}
                                onClick={handleSaveUnitTypeDetails}
                            ></i>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

FloorPlanModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    saveUnitTypeDetails: PropTypes.func.isRequired,
};
export default FloorPlanModal;