import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/properties?page=${currentPage}`);
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          setProperties(data.data);
        } else {
          console.error('Invalid data format received from API:', data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
  
    fetchProperties();
  }, [currentPage]);

  const propertyCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div style={propertyCardsContainerStyle}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {Array.from({ length: Math.ceil(propertiesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
