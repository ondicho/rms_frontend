import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import jwt_decode from 'jwt-decode';
import '../styles/TenantPropertyReview.css';

function TenantPropertyReview() {
    const location = useLocation();
    const navigate = useNavigate();
    const propertyId = location.state?.propertyId;
    const [property, setProperty] = useState(null);
    const [showOwnerDetails, setShowOwnerDetails] = useState(false);
    const [ownerDetails, setOwnerDetails] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReviewText, setNewReviewText] = useState('');
    const [newReviewRating, setNewReviewRating] = useState(3);

  useEffect(() => {
    if (propertyId) {
      const fetchPropertyDetails = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/properties/${propertyId}`);
          const data = await response.json();
          if (response.ok) {
            setProperty(data);
          } else {
            console.error('Error fetching property details:', data);
          }
        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };

      fetchPropertyDetails();
    }
  }, [propertyId]);

  useEffect(() => {
    if (property && property.owner_id) {
      const fetchOwnerDetails = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/users/${property.owner_id}`);
          const data = await response.json();
          if (response.ok) {
            setOwnerDetails(data);
          } else {
            console.error('Error fetching owner details:', data);
          }
        } catch (error) {
          console.error('Error fetching owner details:', error);
        }
      };

      fetchOwnerDetails();
    }
  }, [property]);

  useEffect(() => {
    if (propertyId) {
      const fetchPropertyReviews = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/reviews?property_id=${propertyId}`);
          const data = await response.json();
          if (response.ok && Array.isArray(data.data)) {
            setReviews(data.data);
          } else {
            console.error('Error fetching property reviews:', data);
          }
        } catch (error) {
          console.error('Error fetching property reviews:', error);
        }
      };
  
      fetchPropertyReviews();
    }
  }, [propertyId]);

  const handleBookClick = () => {
    setShowOwnerDetails(true);
  };

  const handleReviewSubmit = async () => {
    const token = localStorage.getItem('access_token');
    console.log(token)
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub.user_id;
    console.log('User ID:', userId);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const newReviewData = {
      review_text: newReviewText,
      rating: newReviewRating,
      tenant_id: userId,
      property_id: property.id,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/reviews', {
        method: 'POST',
        headers,
        body: JSON.stringify(newReviewData),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews([...reviews, newReview]);
        setNewReviewText('');
        setNewReviewRating(1);
      } else {
        console.error('Error submitting review:', response);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  return (
    <div className="property-review-container">
      {property ? (
        <div className="property-details">
          <div className="carousel-container-1">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
            >
              {property.image_urls.reverse().map((imageUrl, index) => (
                <div key={index} className="slide-container-1">
                  <div className="image-holder-1">
                    <img src={imageUrl} alt={`Property ${index + 1}`} className="slide-image" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="details-info">
            <h2>{property.location}</h2>
            <p>Price: Ksh{property.price}</p>
            <p>Number of Rooms: {property.number_of_rooms}</p>
            <p>Description: {property.description}</p>
            <p>Category: {property.category}</p>
            {showOwnerDetails && ownerDetails && (
              <div>
                <p>Owner: {ownerDetails.first_name}</p>
                <p>Phone Number: {ownerDetails.phone_number}</p>
              </div>
            )}
            <button onClick={() => navigate('/payments')} style={{ background: '#3A5B22', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: '8px' }}>Pay</button>
            <button onClick={handleBookClick} style={{ background: '#3A5B22', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: '8px' }}>Book</button>
          </div>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
      <div className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Review by: {review.tenant_id.first_name}</p>
                <p>Rating: {review.rating} stars</p>
                <p>{review.review_text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      <div className="review-form">
        <h3>Write a Review</h3>
        <textarea
          placeholder="Enter your review..."
          value={newReviewText}
          onChange={(e) => setNewReviewText(e.target.value)}
        />
        <div>
          <label>Rating:</label>
          <select
            value={newReviewRating}
            onChange={(e) => setNewReviewRating(e.target.value)}
          >
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </div>
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>
    </div>
  );
}

export default TenantPropertyReview;