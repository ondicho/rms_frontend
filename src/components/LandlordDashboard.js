import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostProperty from './PostProperty';
import ViewProperties from './ViewProperties';
import ViewPaymentBalance from './ViewPayments';
import Settings from './Settings';
import "../styles/OwnerDashboard.css";

function LandLordDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('post-property'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className='Menu' style={{ width: '20%', height: '100vh', backgroundColor: '#dcdcdc', padding: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <div onClick={() => handleTabClick('post-property')} style={{ cursor: 'pointer' }}>Post Property</div>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <div onClick={() => handleTabClick('view-properties')} style={{ cursor: 'pointer' }}>View My Properties</div>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <div onClick={() => handleTabClick('view-payment-balance')} style={{ cursor: 'pointer' }}>View Payment Balance</div>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <div onClick={() => handleTabClick('settings')} style={{ cursor: 'pointer' }}>Settings</div>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <button onClick={handleLogout} style={{ background: '#3A5B22', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px' }}>Logout</button>
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        {activeTab === 'post-property' && <PostProperty />}
        {activeTab === 'view-properties' && <ViewProperties />}
        {activeTab === 'view-payment-balance' && <ViewPaymentBalance />} 
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default LandLordDashboard;