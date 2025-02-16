import React, { useEffect, useState } from 'react';
import './ListedFarmerProducts.css'; // Adjust the path as needed
import { Link, useNavigate } from 'react-router-dom';

function ListedFarmerProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/list-products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleBackToHome = () => {
    navigate('/farmer-dashboard'); // Redirect to /farmer-dashboard
  };

  return (
    // <div className="listed-products-container">
    //   <h2>Market Place</h2>
    //   <div className="product-list">
    //     {products.length === 0 ? (
    //       <p>No products available</p>
    //     ) : (
    //       products.map((product) => (
    //         <div className="product-card" key={product._id}>
    //           <h3>{product.title}</h3>
    //           <p>Email: {product.email}</p>
    //           <p>Category: {product.category}</p>
    //           <p>Produce: {product.produce}</p>
    //           <p>Quantity: {product.quantity} {product.quantityType}</p>
    //           <p>Price: ${product.price}</p>
    //           <p>Status: {product.status}</p>
    //           <img src={product.image1} alt={product.title} />
    //           <p>{product.description}</p>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </div>
    <div className="listed-products-container">
              <button onClick={handleBackToHome} className="back-button" >
          Back to Home
        </button>
        <h2>Market Place</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image1} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p><strong>Email:</strong> {product.email}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Produce:</strong> {product.produce}</p>
                <p><strong>Quantity:</strong> {product.quantity} {product.quantityType}</p>
                <p><strong>Status:</strong> {product.status}</p>
                <p><strong>Price</strong>: ₹{product.price}</p>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default ListedFarmerProducts;
