import React, { useState } from 'react'; 
 import { useNavigate } from 'react-router-dom'; 
  
 function Payments() { 
   const navigate = useNavigate(); 
   const [amount, setAmount] = useState(''); 
   const [successMessage, setSuccessMessage] = useState(''); 
   const [transactionId, setTransactionId] = useState(''); 
   const [phoneNumber, setPhoneNumber] = useState(''); 
   console.log(navigate) 
  
   const handlePayment = async (event) => { 
     event.preventDefault(); 
  
     const accessToken = localStorage.getItem('access_token'); 
  
     const currentDate = new Date(); 
     const paymentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1) 
       .toString() 
       .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`; 
  
     const paymentData = { 
       amount: parseFloat(amount), 
       status: 'paid', 
       tenant_id: 2, 
       property_id: 3, 
       payment_date: paymentDate, 
     }; 
  
     try { 
       const response = await fetch('http://127.0.0.1:5000/payments', { 
         method: 'POST', 
         headers: { 
           'Content-Type': 'application/json', 
           Authorization: `Bearer ${accessToken}`, 
         }, 
         body: JSON.stringify(paymentData), 
       }); 
  
       const data = await response.json(); 
  
       if (response.ok) { 
         setSuccessMessage('Your payment is successful!'); 
         setTransactionId(data.order_id); 
         setPhoneNumber(data.owner_phone_number); 
       } else { 
         alert(`Payment failed: ${JSON.stringify(data)}`); 
       } 
     } catch (error) { 
       console.error('Error occurred during payment:', error); 
     } 
   }; 
  
   return ( 
     <div className="payments-container"> 
       <h2>Make a Payment</h2> 
       {successMessage && ( 
         <div className="success-message"> 
           <p>{successMessage}</p> 
           <p>Your transaction ID: {transactionId}</p> 
           <p>Payment was done to phone number: {phoneNumber}</p> 
         </div> 
       )} 
       <form onSubmit={handlePayment}> 
         <div className="payment-input"> 
           <label>Amount:</label> 
           <input 
             type="number" 
             value={amount} 
             onChange={(e) => setAmount(e.target.value)} 
           /> 
         </div> 
         <button className="payment-button" type="submit"> 
           Make Payment 
         </button> 
       </form> 
     </div> 
   ); 
 } 
  
 export default Payments;