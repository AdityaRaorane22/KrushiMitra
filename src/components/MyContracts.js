import React, { useEffect, useState } from 'react';
import './MyContracts.css';
import { useNavigate } from 'react-router-dom';
import FarmerDashboard from './FarmerDashboard';

function MyContracts() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContract, setSelectedContract] = useState(null);
  const query = new URLSearchParams(window.location.search);
  const farmerEmail = query.get('email');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get-contracts?buyer=${encodeURIComponent(farmerEmail)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setContracts(data);
        } else {
          throw new Error('Failed to fetch contracts');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, [farmerEmail]);

  const handleViewContract = (contract) => {
    setSelectedContract(contract);
  };

  const handleBackToContracts = () => {
    setSelectedContract(null);
  };

  const handleBackToHome = () => {
    navigate('/farmer-dashboard'); // Redirect to /farmer-dashboard
  };

  const calculateStageDates = (startDate, endDate, stages) => {
    const stageDates = [];
    const totalDays = Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;
    const daysPerStage = Math.floor(totalDays / stages);

    for (let i = 0; i < stages; i++) {
      const stageStartDate = new Date(new Date(startDate).getTime() + i * daysPerStage * 24 * 60 * 60 * 1000);
      const stageEndDate = i === stages - 1
        ? new Date(endDate)
        : new Date(new Date(stageStartDate).getTime() + daysPerStage * 24 * 60 * 60 * 1000 - 1);

      stageDates.push({ stage: i + 1, stageStartDate, stageEndDate });
    }

    return stageDates;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (selectedContract) {
    const stageDates = calculateStageDates(selectedContract.contractStartDate, selectedContract.contractEndDate, parseInt(selectedContract.stage, 10));

    return (
      <div className="farmer-dashboard-container">
      <FarmerDashboard />
      <div className="contract-detail-container">
        
        <button onClick={handleBackToContracts} className="back-button">
          Back to Contracts
        </button>
        <h2>Contract #{selectedContract._id}</h2>
        <p>Buyer: {selectedContract.buyer}</p>
        <p>Commodity: {selectedContract.commodity}</p>
        <p>Quantity: {selectedContract.quantity}</p>
        <p>Price: {selectedContract.price}</p>
        <p>Status: {selectedContract.status}</p>
        <p>Contract Start Date: {new Date(selectedContract.contractStartDate).toLocaleDateString()}</p>
        <p>Contract End Date: {new Date(selectedContract.contractEndDate).toLocaleDateString()}</p>
        <p>Stage: {selectedContract.stage}</p>
        {stageDates.map((stage) => (
          <p key={stage.stage}>
            Stage {stage.stage}: {stage.stageStartDate.toLocaleDateString()} to {stage.stageEndDate.toLocaleDateString()}
          </p>
        ))}
        <p>Clauses: {selectedContract.clauses}</p>
      </div>
</div>
    );
  }

  return (
    <div className="farmer-dashboard-container">
      <FarmerDashboard />
    <div className="my-contracts-container">

      <button onClick={handleBackToHome} className="back-button">
        Back to Home
      </button>
      <h2>My Contracts</h2>
      <div className="contracts-list">
        {contracts.length === 0 ? (
          <p>No contracts found.</p>
        ) : (
          contracts.map((contract) => (
            <div className="contract-card" key={contract._id}>
              <h3>Contract #{contract._id}</h3>
              <p>Buyer: {contract.buyer}</p>
              <p>Commodity: {contract.commodity}</p>
              <p>Quantity: {contract.quantity}</p>
              <p>Price: {contract.price}</p>
              <p>Status: {contract.status}</p>
              <p>Contract Start Date: {new Date(contract.contractStartDate).toLocaleDateString()}</p>
              <p>Contract End Date: {new Date(contract.contractEndDate).toLocaleDateString()}</p>
              <p>Stage: {contract.stage}</p>
              <p>Clauses: {contract.clauses}</p>
              <button className="view-contract-button" onClick={() => handleViewContract(contract)}>
                View Contract
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}

export default MyContracts;
