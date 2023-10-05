// PropertyCard.js
import React, { useState, useEffect } from 'react';

const PropertyCard = ({ propertyId }) => {
  const [propertyData, setPropertyData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https:///api/properties/${propertyId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPropertyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [propertyId]);

  return (
    <div className="property-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{propertyData.name}</h2>
          <p><strong>Location:</strong> {propertyData.location}</p>
          <p><strong>Owner:</strong> {propertyData.owner}</p>
          <p><strong>Number of Floors:</strong> {propertyData.noOfFloors}</p>
          <p><strong>Number of Units:</strong> {propertyData.noOfUnits}</p>
          <a href={propertyData.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;