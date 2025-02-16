import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CreateContract.css';

function CreateContract() {
  const location = useLocation();
  const [buyer, setBuyer] = useState('');
  const [commodity, setCommodity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [contractStartDate, setContractStartDate] = useState('');
  const [contractEndDate, setContractEndDate] = useState('');
  const [stage, setStage] = useState('1');
  const [stage1Name, setStage1Name] = useState('');
  const [stage2Name, setStage2Name] = useState('');
  const [stage3Name, setStage3Name] = useState('');
  const [clauses, setClauses] = useState('');

  useEffect(() => {
    if (location.state) {
      const { buyer, commodity, quantity, price } = location.state;
      setBuyer(buyer || '');
      setCommodity(commodity || '');
      setQuantity(quantity || '');
      setPrice(price || '');
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contract = {
      buyer,
      commodity,
      quantity,
      price,
      contractStartDate,
      contractEndDate,
      stage,
      clauses,
      stage1Name,
      stage2Name,
      stage3Name
    };

    const response = await fetch('http://localhost:5000/create-contract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contract),
    });

    if (response.ok) {
      alert('Contract created successfully!');
    } else {
      alert('Error creating contract');
    }
  };

  return (
    <div className="create-contract-container">
      <h2>Create Contract</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buyer Email"
          value={buyer}
          onChange={(e) => setBuyer(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Commodity"
          value={commodity}
          onChange={(e) => setCommodity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Contract Start Date"
          value={contractStartDate}
          onChange={(e) => setContractStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Contract End Date"
          value={contractEndDate}
          onChange={(e) => setContractEndDate(e.target.value)}
          required
        />
        <div>
          <label>Stage of Contract:</label>
          <div>
            <label>
              <input
                type="radio"
                name="stage"
                value="1"
                checked={stage === '1'}
                onChange={(e) => setStage(e.target.value)}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="stage"
                value="2"
                checked={stage === '2'}
                onChange={(e) => setStage(e.target.value)}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="stage"
                value="3"
                checked={stage === '3'}
                onChange={(e) => setStage(e.target.value)}
              />
              3
            </label>
          </div>
        </div>
        {stage === '1' && (
          <input
            type="text"
            placeholder="Stage 1 Name"
            value={stage1Name}
            onChange={(e) => setStage1Name(e.target.value)}
          />
        )}
        {stage === '2' && (
          <div>
            <input
              type="text"
              placeholder="Stage 1 Name"
              value={stage1Name}
              onChange={(e) => setStage1Name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Stage 2 Name"
              value={stage2Name}
              onChange={(e) => setStage2Name(e.target.value)}
            />
          </div>
        )}
        {stage === '3' && (
          <div>
            <input
              type="text"
              placeholder="Stage 1 Name"
              value={stage1Name}
              onChange={(e) => setStage1Name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Stage 2 Name"
              value={stage2Name}
              onChange={(e) => setStage2Name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Stage 3 Name"
              value={stage3Name}
              onChange={(e) => setStage3Name(e.target.value)}
            />
          </div>
        )}
        <textarea
          placeholder="Clauses"
          value={clauses}
          onChange={(e) => setClauses(e.target.value)}
          required
        />
        <button type="submit">Create Contract</button>
      </form>
    </div>
  );
}

export default CreateContract;
