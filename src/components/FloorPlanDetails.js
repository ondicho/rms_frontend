// FloorPlanDetails.js
import React, { useState, useEffect } from 'react';

const FloorPlanDetails = ({ propertyData }) => {
  const [floorData, setFloorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint URL for fetching floor plan details based on property data
    const apiUrl = 'https://example.com/api/floorplan';

    // You can use propertyData to construct the request payload, such as property ID
    const requestData = {
      propertyId: propertyData.propertyId, // Replace with your property data structure
    };

    // Fetch data from the API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFloorData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching floor plan data:', error);
        setLoading(false);
      });
  }, [propertyData]);

  return (
    <div className="floor-plan-details">
      <h2>Floor Plan Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        floorData.map((floor, index) => (
          <div key={index} className="floor">
            <h3>Floor {index + 1}</h3>
            <p><strong>Number of Units:</strong> {floor.numberOfUnits}</p>
            <p><strong>Dimensions:</strong></p>
            <ul>
              <li><strong>Studio Apartment:</strong> {floor.dimensions.studioApartment}</li>
              <li><strong>1 Bedroom:</strong> {floor.dimensions.oneBedroom}</li>
              <li><strong>2 Bedroom:</strong> {floor.dimensions.twoBedroom}</li>
              <li><strong>3 Bedroom:</strong> {floor.dimensions.threeBedroom}</li>
            </ul>
            <p><strong>Master Ensuite:</strong> {floor.masterEnsuite ? 'Yes' : 'No'}</p>
            <p><strong>Dining Area:</strong> {floor.diningArea ? 'Yes' : 'No'}</p>
            <p><strong>Number of Bathrooms:</strong> {floor.numberOfBathrooms}</p>
            <p><strong>Number of Balconies:</strong> {floor.numberOfBalconies}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FloorPlanDetails;
