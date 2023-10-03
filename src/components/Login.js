import React, { useState } from 'react'; 
 import { useNavigate } from 'react-router-dom'; 
 import './Login.css'; 
  
 function Login() { 
   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState(''); 
   const [showPassword, setShowPassword] = useState(false); 
   const navigate = useNavigate(); 
  
   const handleLogin = async (event) => { 
     event.preventDefault(); 
  
     const loginData = { 
       email, 
       password, 
     }; 
  
     try { 
       const response = await fetch('http://127.0.0.1:5000/login', { 
         method: 'POST', 
         headers: { 
           'Content-Type': 'application/json', 
         }, 
         body: JSON.stringify(loginData), 
       }); 
  
       const data = await response.json(); 
  
       if (response.ok) { 
         const refreshToken = data.refresh_token; 
         saveRefreshToken(refreshToken); 
  
         if ('unverified' in data) { 
           alert('Please verify your email before logging in.'); 
         } else if ('owner' in data || 'tenant' in data) { 
           const userType = data.owner ? 'owner' : 'tenant'; 
           localStorage.setItem('user_type', userType); 
  
           if ('user_id' in data) { 
             localStorage.setItem('user_id', data.user_id); 
           } 
           localStorage.setItem('access_token', data[userType]); 
           console.log(data) 
  
           navigate(`/${userType}-dashboard`); 
         } else { 
           alert('Unknown user type. Please contact support.'); 
         } 
       } else { 
         alert(`${JSON.stringify(data)}`); 
       } 
     } catch (error) { 
       console.error('Error occurred during login:', error); 
     } 
   }; 
  
   const saveRefreshToken = (token) => { 
     localStorage.setItem('refresh_token', token); 
   }; 
  
   return ( 
     <div className="login-container"> 
       <div className="left-half"> 
         <h2>Welcome back!</h2> 
         <p>Enter your credentials for Access your account</p> 
         <div className="login-form"> 
           <form onSubmit={handleLogin}> 
             <div className="email-container"> 
               <label>Email address:</label> 
               <input 
                 type="email" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} 
                 className="email-input" 
               /> 
             </div> 
             <div className="password-container"> 
               <div className="password-input"> 
                 <label>Password:</label> 
                 <input 
                   type={showPassword ? 'text' : 'password'} 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} 
                   className="input-field" 
                 /> 
                 <div className="show-password"> 
                   <input 
                     type="checkbox" 
                     checked={showPassword} 
                     onChange={() => setShowPassword(!showPassword)} 
                   /> 
                   <label className="text">Show Password</label> 
                 </div> 
               </div> 
             </div> 
             <button className="login-button" type="submit"> 
               Login 
             </button> 
           </form> 
         </div> 
         <div className="sign-in-options"> 
           <p>Or sign in with:</p> 
           <button className="signin-google-button">Sign in with Google</button> 
           <button className="signin-apple-button">Sign in with Apple</button> 
         </div> 
         <div className="signup-option"> 
           <p> 
             Don't have an account? <a href="/register">Sign Up</a> 
           </p> 
         </div> 
       </div> 
       <div className="right-half"></div> 
     </div> 
   ); 
 } 
  
 export default Login;
