import React from 'react';
import { Link } from 'react-router-dom';
import './ContractorDashboard.css';
import ContractorChat from './ContractorChat'; // Import ContractorChat component
import { useNavigate } from 'react-router-dom';

function ContractorDashboard() {
  // Replace 'farmer@example.com' with the actual farmer email when implementing real logic
  const farmerEmail = 'rajesh.verma@example.com';
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/login'); // Redirect to /farmer-dashboard
  };

  return (
    <div className="contractor-dashboard-container">
      {/* <div className="dashboard-options">
        <Link to="/listed-products" className="dashboard-link">
          Market Place
        </Link>
        <Link to="/view-farmers" className="dashboard-link">
          Farmers
        </Link>
        <Link to="/contracts" className="dashboard-link">
          My Contracts
        </Link>
        <Link to="/chat" className="dashboard-link">
          Chat
        </Link>
      </div> */}
      <nav className="dashboard-navbar-contractor">
        <h1>Welcome to KrushiMitra</h1>
        <ul>
          <li><Link to="/listed-products" className="dashboard-link">
          Market Place
        </Link></li>
          <li><Link to="/view-farmers" className="dashboard-link">
          Farmers
        </Link></li>
          <li><Link to="/contracts" className="dashboard-link">
          My Contracts
        </Link></li>
          <li><Link to="/chat" className="dashboard-link">
          Chat
        </Link></li>
        </ul>
        <button onClick={handleBackToHome} className="back-button">
        Log Out
      </button>
      </nav>
    </div>
  );
}

export default ContractorDashboard;
