import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/styling.css";

const RegisterProperty = () => {
  const navigate = useNavigate();
  const landlordName = useRef();
  const location = useRef();
  const locationUrl = useRef();
  const numberOfBlocks = useRef();
  const numberOfFloors = useRef();
  const numberOfUnitsPerFloor = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access form values using the references above
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
              <label htmlFor="numberOfFloors" className="form-label">
                Number of Floors per Block
              </label>
              <input
                type="number"
                id="numberOfFloors"
                ref={numberOfFloors}
                placeholder="E.g. 5"
                required
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Section B */}
        <div className="section-b">
          <div className="form-section">
            <h3>Floor Details</h3>
            <div className="form-group">
              <label htmlFor="numberOfBlocks" className="form-label">
                Unit Type
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
              <label htmlFor="numberOfFloors" className="form-label">
                No of Units
              </label>
              <input
                type="number"
                id="numberOfFloors"
                ref={numberOfFloors}
                placeholder="E.g. 5"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="numberOfFloors" className="form-label">
               Rent Per Unit
              </label>
              <input
                type="number"
                id="numberOfFloors"
                ref={numberOfFloors}
                placeholder="E.g. 5"
                required
                className="form-input"
              />
            </div>
            {/* Add more form fields for Section B */}
          </div>
        </div>
      </div>

      {/* Rest of your form */}
      <div className="form">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterProperty;
