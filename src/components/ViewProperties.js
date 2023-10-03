// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
// import { EditOwnerProperty } from './EditOwnerProperty'; // Import the EditOwnerProperty component

// function ViewProperties() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/properties')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setProperties(data); // Assuming the properties data is directly in JSON format
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>View Properties</h1>
//       <ul>
//         {properties.map(property => (
//           <li key={property.id}>
//             <h2>{property.location}</h2>
//             <p>Price: ${property.price}</p>
//             <p>Description: {property.description}</p>
//             <div>
//               {property.image_urls.map((imageUrl, index) => (
//                 <Link key={index} to={`/edit-property/${property.id}`}>
//                   <img src={imageUrl} alt={`Property ${index + 1}`} />
//                 </Link>
//               ))}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ViewProperties;
