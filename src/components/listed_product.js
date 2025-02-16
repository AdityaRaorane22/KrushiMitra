import React, { useEffect, useState } from 'react';
import './ListedProducts.css';
import { useNavigate } from 'react-router-dom';

function ListedProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/list-products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleCreateContract = (product) => {
    navigate('/create-contract', {
      state: {
        buyer: product.email,
        commodity: product.produce,
        quantity: product.quantity,
        price: product.price,
      },
    });
  };

  const handleBackToHome = () => {
    navigate('/contractor-dashboard'); // Redirect to /farmer-dashboard
  };

  return (
    <div className="listed-products-container">
      <button onClick={handleBackToHome} className="back-button">
        Back to Home
      </button>
      <h2>Market Place</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.title}</h3>
            <p>Email: {product.email}</p>
            <p>Category: {product.category}</p>
            <p>Produce: {product.produce}</p>
            <p>Quantity: {product.quantity} {product.quantityType}</p>
            <p>Price: ₹{product.price}</p>
            <p>Status: {product.status}</p>
            <img src={product.image1} alt={product.title} />
            <p>{product.description}</p>
            <button 
              className="create-contract-button"
              onClick={() => handleCreateContract(product)}
            >
              Create a Contract
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListedProducts;
