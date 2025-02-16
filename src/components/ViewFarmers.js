import React, { useEffect, useState } from 'react';
import './ViewFarmers.css';
import { useNavigate } from 'react-router-dom';

function ViewFarmers() {
  const [farmers, setFarmers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFarmers = async () => {
      const response = await fetch('http://localhost:5000/view-farmers');
      const data = await response.json();
      setFarmers(data);
    };

    fetchFarmers();
  }, []);

  const handleBackToHome = () => {
    navigate('/contractor-dashboard'); // Redirect to /farmer-dashboard
  };

  return (
    <div className="view-farmers-container">
            <button onClick={handleBackToHome} className="back-button">
        Back to Home
      </button>
      <h2>Registered Farmers</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>State</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer._id}>
              <td>{farmer.firstName}</td>
              <td>{farmer.lastName}</td>
              <td>{farmer.dob}</td>
              <td>{farmer.mobile}</td>
              <td>{farmer.address}</td>
              <td>{farmer.state}</td>
              <td>{farmer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewFarmers;
