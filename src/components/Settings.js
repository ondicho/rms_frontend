import React, { useState } from 'react'; 
 import "../styles/Settings.css"; 
  
 function Settings() { 
   const [isDarkMode, setIsDarkMode] = useState(false); 
  
   const handleModeToggle = () => { 
     setIsDarkMode((prevMode) => !prevMode); 
   }; 
  
   return ( 
     <div className={`settings-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> 
       <h1>Settings</h1> 
       <div className="mode-toggle"> 
         <label> 
           <input 
             type="checkbox" 
             checked={isDarkMode} 
             onChange={handleModeToggle} 
           /> 
           {isDarkMode ? 'Dark Mode' : 'Light Mode'} 
         </label> 
       </div> 
     </div> 
   ); 
 } 
  
 export default Settings;
