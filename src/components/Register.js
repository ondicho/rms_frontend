import React, { useState } from 'react'; 
 import { useNavigate } from 'react-router-dom'; 
 import './src/styles/SignUp.css'; 
  
 const Register = () => { 
   const [formData, setFormData] = useState({ 
     first_name: '', 
     last_name: '', 
     email: '', 
     phone_number: '', 
     password: '', 
     user_type: '', 
   }); 
  
   const handleChange = (event) => { 
     const { name, value } = event.target; 
     setFormData((prevFormData) => ({ ...prevFormData, [name]: value })); 
   }; 
  
   const navigate = useNavigate();  
  
   const handleSubmit = (event) => { 
     event.preventDefault(); 
  
     if (formData.user_type !== 'tenant' && formData.user_type !== 'landlord') { 
       alert('Invalid user_type. Please select "tenant" or "owner".'); 
       return; 
     } 
  
     fetch('http://127.0.0.1:5000/users', { 
       method: 'POST', 
       headers: { 
         'Content-Type': 'application/json', 
       }, 
       body: JSON.stringify(formData), 
     }) 
       .then((response) => { 
         if (!response.ok) { 
           throw new Error('Network response was not ok'); 
         } 
         console.log('User created successfully!'); 
  
         alert('User created successfully!'); 
  
         navigate('/login'); 
       }) 
       .catch((error) => { 
         console.error('Error creating user:', error); 
       }); 
   }; 
  
   return ( 
     <div className="signup-container"> 
       <div className="left-half"> 
         <h2>Get Started Now</h2> 
         <form onSubmit={handleSubmit}> 
           <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required /> 
           <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required /> 
           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> 
           <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required /> 
           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /> 
           <select name="user_type" value={formData.user_type} onChange={handleChange} required> 
             <option value="">Select User Type</option> 
             <option value="tenant">Tenant</option> 
             <option value="landlord">Landlord</option> 
           </select> 
           <button className="signup-button" type="submit"> 
             Sign Up 
           </button> 
           <div className="sign-up-options"> 
             <p>Or sign up with:</p> 
             <div className="signup-buttons-wrapper"> 
                 <button className="signup-google-button">Sign up with Google</button> 
                 <button className="signup-apple-button">Sign up with Apple</button> 
             </div> 
           </div> 
         </form> 
       </div> 
       <div className="right-half"> 
       </div> 
     </div> 
   ); 
 }; 
  
 export default Register;