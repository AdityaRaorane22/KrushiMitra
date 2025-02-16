import React, { useState } from 'react';
import './FilterComponent.css'; // Import the CSS file

const FilterComponent = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const uniqueStates = [...new Set(data.map(item => item.state))];
  const uniqueDistricts = selectedState 
    ? [...new Set(data.filter(item => item.state === selectedState).map(item => item.district))]
    : [];
  const uniqueCommodities = selectedDistrict
    ? [...new Set(data.filter(item => item.district === selectedDistrict).map(item => item.commodity))]
    : [];

  const handleFilter = () => {
    const results = data.filter(item => 
      item.state === selectedState && 
      item.district === selectedDistrict && 
      item.commodity === selectedCommodity
    );
    setFilteredResults(results);
  };

  return (
    <div>
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className="sticky-button"
      >
        <span className='magnify'>&#x1F50D;</span> {/* Magnifying glass icon for filter */}
      </button>

      {isVisible && (
        <div className="popup-container">
          <h5 className="popup-header">Analyze the Market Trend</h5>

          <div className="mb-3">
            <select className="form-select form-select-custom" onChange={e => setSelectedState(e.target.value)} value={selectedState}>
              <option value="">Select State</option>
              {uniqueStates.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <select className="form-select form-select-custom" onChange={e => setSelectedDistrict(e.target.value)} value={selectedDistrict} disabled={!selectedState}>
              <option value="">Select District</option>
              {uniqueDistricts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <select className="form-select form-select-custom" onChange={e => setSelectedCommodity(e.target.value)} value={selectedCommodity} disabled={!selectedDistrict}>
              <option value="">Select Commodity</option>
              {uniqueCommodities.map((commodity, index) => (
                <option key={index} value={commodity}>{commodity}</option>
              ))}
            </select>
          </div>

          <button className="btn filter-button w-100" onClick={handleFilter}>Filter</button>

          <div className="result-container mt-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div key={index} className="card mb-3 card-custom">
                  <div className="card-body">
                    <h5 className="card-title card-title-custom">{item.commodity}</h5>
                    <h6 className="card-subtitle mb-2 card-subtitle-custom">{item.market}</h6>
                    <p className="card-text card-text-custom">
                      <strong>State:</strong> {item.state} <br />
                      <strong>District:</strong> {item.district} <br />
                      <strong>Variety:</strong> {item.variety} <br />
                      <strong>Grade:</strong> {item.grade} <br />
                      <strong>Min Price:</strong> {item.min_price} <br />
                      <strong>Max Price:</strong> {item.max_price} <br />
                      <strong>Modal Price:</strong> {item.modal_price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No results found. Please adjust your filter criteria.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;