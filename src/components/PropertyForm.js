import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    googleMapsUrl: '',
    owner: '',
    noOfFloors: 0,
    noOfUnits: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'https://api/properties';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data stored successfully:', data);
        // Reset the form fields
        setFormData({
          name: '',
          location: '',
          googleMapsUrl: '',
          owner: '',
          noOfFloors: 0,
          noOfUnits: 0,
        });
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <div>
      <h2>Add a New Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="googleMapsUrl">Google Maps URL:</label>
          <input
            type="text"
            id="googleMapsUrl"
            name="googleMapsUrl"
            value={formData.googleMapsUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="noOfFloors">Number of Floors:</label>
          <input
            type="number"
            id="noOfFloors"
            name="noOfFloors"
            value={formData.noOfFloors}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="noOfUnits">Number of Units:</label>
          <input
            type="number"
            id="noOfUnits"
            name="noOfUnits"
            value={formData.noOfUnits}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyForm;
