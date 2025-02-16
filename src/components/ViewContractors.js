import React, { useEffect, useState } from 'react';
import './ViewContractors.css';

function ViewContractors() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    const fetchContractors = async () => {
      const response = await fetch('http://localhost:5000/view-contractors');
      const data = await response.json();
      setContractors(data);
    };

    fetchContractors();
  }, []);

  return (
    <div className="view-contractors-container">
      <h2>Registered Contractors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contractors.map((contractor) => (
            <tr key={contractor._id}>
              <td>{contractor.name}</td>
              <td>{new Date(contractor.dob).toLocaleDateString()}</td>
              <td>{contractor.address}</td>
              <td>{contractor.contact}</td>
              <td>{contractor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewContractors;
