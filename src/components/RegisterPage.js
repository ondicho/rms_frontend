import React, { useState } from 'react'; 
  
 const RegisterPage = () => { 
   const [userType, setUserType] = useState('owners'); 
   const [name, setName] = useState(''); 
   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState(''); 
   const [agreedToTerms, setAgreedToTerms] = useState(false); 
  
   const handleSignup = () => { 
     // Log user input data 
     console.log('User Type:', userType); 
     console.log('Name:', name); 
     console.log('Email:', email); 
     console.log('Password:', password); 
     console.log('Agreed to Terms:', agreedToTerms); 
   }; 
  
   return ( 
     <div className="signup-container"> 
       <h2>Get Started Now!</h2> 
       <div className="user-type-dropdown"> 
         <label>Select User Type:</label> 
         <select value={userType} onChange={(e) => setUserType(e.target.value)}> 
           <option value="owners">Owners</option> 
           <option value="tenants">Tenants</option> 
           <option value="admin">Admin</option> 
         </select> 
       </div> 
       <div className="signup-form"> 
         <div className="name-container"> 
           <label>Name:</label> 
           <input 
             type="text" 
             value={name} 
             onChange={(e) => setName(e.target.value)} 
           /> 
         </div> 
         <div className="email-container"> 
           <label>Email address:</label> 
           <input 
             type="email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)} 
           /> 
         </div> 
         <div className="password-container"> 
           <label>Password:</label> 
           <input 
             type="password" 
             value={password} 
             onChange={(e) => setPassword(e.target.value)} 
           /> 
         </div> 
         <div className="terms-container"> 
           <input 
             type="checkbox" 
             checked={agreedToTerms} 
             onChange={() => setAgreedToTerms(!agreedToTerms)} 
           /> 
           <label>I agree to the terms and policy</label> 
         </div> 
         <button className="signup-button" onClick={handleSignup}> 
           Signup 
         </button> 
         <div className="signup-options"> 
           <p>Or signup with:</p> 
           <button className="google-signup">Signup with Google</button> 
           <button className="apple-signup">Signup with Apple</button> 
         </div> 
       </div> 
       <div className="signin-option"> 
         <p>Have an account? <a href="/login">Sign In</a></p> 
       </div> 
       <div className="google-logo">Google Logo</div> 
       <div className="apple-logo">Apple Logo</div> 
     </div> 
   ); 
 }; 
  
 export default RegisterPage;

