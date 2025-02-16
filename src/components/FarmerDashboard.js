import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FarmerDashboard.css';
import FarmerChat from './FarmerChat'; // Import FarmerChat component
import { useNavigate } from 'react-router-dom';
import ListedFarmerProducts from './ListedFarmerProducts';

function FarmerDashboard() {
  const [farmerEmail, setFarmerEmail] = useState('');
  const [showChat, setShowChat] = useState(false);
  const contractorEmail = 'amit.sharma@example.com'; // Replace with actual contractor email
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the logged-in farmer's email from the server
    const fetchFarmerDetails = async () => {
      try {
        const userId = '66d079f887c6859a2a3b51a1'; // Hardcoded for testing; replace with actual logic

        const response = await fetch(`http://localhost:5000/get-farmer-details?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFarmerEmail(data.email);
        } else {
          console.error('Failed to fetch farmer details');
        }
      } catch (error) {
        console.error('Error fetching farmer details:', error);
      }
    };

    fetchFarmerDetails();
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleChatClick = () => {
    // Open the chatbot widget if it's not already open
    if (window.DocsBotAI && typeof window.DocsBotAI.open === 'function') {
      window.DocsBotAI.open();
    } else {
      console.error('DocsBotAI.open function is not available.');
    }
  };

  const handleBackToHome = () => {
    navigate('/'); // Redirect to /farmer-dashboard
  };

  return (
    <div className="farmer-dashboard-container">
      <header className="dashboard-header">
      
        
      </header>
      <nav className="dashboard-navbar">
        <h1>Welcome to KrushiMitra</h1>
        <div className="farmer-email">
          <span>{farmerEmail || 'Loading...'}</span>
        </div>
        <ul>
          <li><Link to="/list-product">List a Product</Link></li>
          <li><Link to="/listed-farmer-products">Marketplace</Link></li>
          <li><Link to="/view-contractors">View Contractors</Link></li>
          <li><Link to={`/my-contracts?email=${encodeURIComponent(farmerEmail)}`}>My Contracts</Link></li>
          <li><button onClick={() => setShowChat(!showChat)}>Chat</button></li>
        </ul>
        <button onClick={handleBackToHome} className="back-button">
        Log Out
      </button>
      </nav>
      {showChat && <FarmerChat receiverEmail={contractorEmail} />}
    
    </div>
  );
}

export default FarmerDashboard;
