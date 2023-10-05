import React, { useState } from 'react';

const HouseUnitForm = () => {
  const [formData, setFormData] = useState({
    noOfRooms: '',
    masterEnsuite: false,
    diningArea: false,
    numberOfBathrooms: '',
    numberOfBalconies: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'https/houseunits';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('House unit data stored successfully:', data);
        // Reset the form fields
        setFormData({
          noOfRooms: '',
          masterEnsuite: false,
          diningArea: false,
          numberOfBathrooms: '',
          numberOfBalconies: '',
        });
      })
      .catch((error) => {
        console.error('Error storing house unit data:', error);
      });
  };

  return (
    <div>
      <h2>Add House Unit Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noOfRooms">Number of Rooms:</label>
          <select
            id="noOfRooms"
            name="noOfRooms"
            value={formData.noOfRooms}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="studio apartment">Studio Apartment</option>
            <option value="1 bedroom">1 Bedroom</option>
            <option value="2 bedroom">2 Bedroom</option>
            <option value="3 bedroom">3 Bedroom</option>
          </select>
        </div>
        <div>
          <label htmlFor="masterEnsuite">Master Ensuite:</label>
          <input
            type="checkbox"
            id="masterEnsuite"
            name="masterEnsuite"
            checked={formData.masterEnsuite}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="diningArea">Dining Area:</label>
          <input
            type="checkbox"
            id="diningArea"
            name="diningArea"
            checked={formData.diningArea}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="numberOfBathrooms">Number of Bathrooms:</label>
          <input
            type="text"
            id="numberOfBathrooms"
            name="numberOfBathrooms"
            value={formData.numberOfBathrooms}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfBalconies">Number of Balconies:</label>
          <input
            type="text"
            id="numberOfBalconies"
            name="numberOfBalconies"
            value={formData.numberOfBalconies}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HouseUnitForm;
