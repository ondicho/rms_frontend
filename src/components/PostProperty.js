import React, { useState } from 'react';
import './PropertyForm.css'; // Import your CSS file

function PostProperty() {
  const [property, setProperty] = useState({
    name: '',
    location: '',
    owner: '',
    numOfUnits: 0,
    numOfBlocks: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the property data here
    // For example, send it to a server or update your application's state.
    console.log(property);
  }

  return (
    <div>
      <h2>Property Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={property.owner}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numOfUnits">Number of Units:</label>
          <input
            type="number"
            id="numOfUnits"
            name="numOfUnits"
            value={property.numOfUnits}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numOfBlocks">Number of Blocks:</label>
          <input
            type="number"
            id="numOfBlocks"
            name="numOfBlocks"
            value={property.numOfBlocks}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PostProperty;
