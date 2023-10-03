import React, { useState, useEffect } from 'react';
import MoversCard from './MoversCard';

function Movers() {
  const [movers, setMovers] = useState([]);

  useEffect(() => {
    fetchMovers();
  }, []);

  const fetchMovers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/move_assistances');
      const data = await response.json();
      if (data && Array.isArray(data.data)) {
        setMovers(data.data);
      } else {
        console.error('Invalid data format received from API:', data);
      }
    } catch (error) {
      console.error('Error fetching movers:', error);
    }
  };

  const handleBookService = (moverId) => {
    // Here you can implement the booking functionality
    // Update the status of the selected mover and handle other logic
    console.log(`Booking service for mover with ID: ${moverId}`);
    const updatedMovers = movers.map((mover) => {
      if (mover.id === moverId) {
        return { ...mover, status: 'pending', isBooked: true };
      }
      return mover;
    });
    setMovers(updatedMovers);
  };

  return (
    <div>
      <h1>Movers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {movers.map((mover) => (
          <MoversCard key={mover.id} mover={mover} handleBookService={handleBookService} />
        ))}
      </div>
    </div>
  );
}

export default Movers;
