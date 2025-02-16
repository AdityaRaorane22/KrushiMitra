import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ContractsList.css';
import { useNavigate } from 'react-router-dom';


function ContractsList() {
  const [contracts, setContracts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      const response = await fetch('http://localhost:5000/get-ccontracts');
      const data = await response.json();
      setContracts(data);
    };

    fetchContracts();
  }, []);

  const downloadPDF = async (contract) => {
    const pdf = new jsPDF();

    // Create a div element to hold the content for PDF
    const pdfContent = document.createElement('div');
    pdfContent.style.fontFamily = 'Arial, sans-serif';
    pdfContent.style.padding = '20px';
    pdfContent.style.maxWidth = '700px';
    pdfContent.style.margin = 'auto';
    pdfContent.innerHTML = `
      <h1 style="text-align: center;">Contract #${contract._id}</h1>
      <hr style="border: 1px solid #000;">
      <p><strong>Buyer:</strong> ${contract.buyer}</p>
      <p><strong>Commodity:</strong> ${contract.commodity}</p>
      <p><strong>Quantity:</strong> ${contract.quantity}</p>
      <p><strong>Price:</strong> ${contract.price}</p>
      <p><strong>Status:</strong> ${contract.status}</p>
      <p><strong>Contract Start Date:</strong> ${new Date(contract.contractStartDate).toLocaleDateString()}</p>
      <p><strong>Contract End Date:</strong> ${new Date(contract.contractEndDate).toLocaleDateString()}</p>
      <p><strong>Stage:</strong> ${contract.stage}</p>
      ${contract.stage === '1' ? `<p><strong>Stage 1 Name:</strong> ${contract.stage1Name}</p>` : ''}
      ${contract.stage === '2' ? `<p><strong>Stage 1 Name:</strong> ${contract.stage1Name}</p><p><strong>Stage 2 Name:</strong> ${contract.stage2Name}</p>` : ''}
      ${contract.stage === '3' ? `<p><strong>Stage 1 Name:</strong> ${contract.stage1Name}</p><p><strong>Stage 2 Name:</strong> ${contract.stage2Name}</p><p><strong>Stage 3 Name:</strong> ${contract.stage3Name}</p>` : ''}
      <p><strong>Clauses:</strong> ${contract.clauses}</p>
      <hr style="border: 1px solid #000;">
      <footer style="text-align: center; font-size: 12px; margin-top: 20px;">
        <p>Krushimitra</p>
        <p>krushimitra@gmail.com</p>
      </footer>
    `;

    document.body.appendChild(pdfContent);

    // Capture the content as image
    const canvas = await html2canvas(pdfContent, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    // Define the format of the PDF
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
    pdf.save(`Contract_${contract._id}.pdf`);

    // Remove the temporary div
    document.body.removeChild(pdfContent);
  };

  const handleBackToHome = () => {
    navigate('/contractor-dashboard'); // Redirect to /farmer-dashboard
  };

  return (
    <div className="contracts-list-container">
            <button onClick={handleBackToHome} className="back-button">
        Back to Home
      </button>
      <h2>Contracts List</h2>
      <div className="contracts-list">
        {contracts.map((contract) => (
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
            {contract.stage === '1' && <p>Stage 1 Name: {contract.stage1Name}</p>}
            {contract.stage === '2' && (
              <div>
                <p>Stage 1 Name: {contract.stage1Name}</p>
                <p>Stage 2 Name: {contract.stage2Name}</p>
              </div>
            )}
            {contract.stage === '3' && (
              <div>
                <p>Stage 1 Name: {contract.stage1Name}</p>
                <p>Stage 2 Name: {contract.stage2Name}</p>
                <p>Stage 3 Name: {contract.stage3Name}</p>
              </div>
            )}
            <p>Clauses: {contract.clauses}</p>
            <button onClick={() => downloadPDF(contract)}>Download Contract</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContractsList;
