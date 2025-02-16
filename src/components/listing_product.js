import React, { useState } from 'react';
import './ListingProduct.css';
import FarmerDashboard from './FarmerDashboard';
import { useNavigate } from 'react-router-dom';

function ListingProduct() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [produce, setProduce] = useState('');
  const [title, setTitle] = useState('');
  const [image1, setImage1] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityType, setQuantityType] = useState('kilogram');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('active');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { email, category, produce, title, image1, quantity, quantityType, description, price, status };

    const response = await fetch('http://localhost:5000/list-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      alert('Product listed successfully!');
      navigate('/farmer-dashboard');
    } else {
      alert('Error listing product');
    }
  };

  

  return (
    <div className="farmer-dashboard-container">
      <FarmerDashboard />
    <div className="listing-product-container">
      <h2>List a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="produce">Produce:</label>
          <input
            type="text"
            id="produce"
            placeholder="Produce"
            value={produce}
            onChange={(e) => setProduce(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image1">Image URL 1:</label>
          <input
            type="text"
            id="image1"
            placeholder="Image URL 1"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantityType">Quantity Type:</label>
          <select
            id="quantityType"
            value={quantityType}
            onChange={(e) => setQuantityType(e.target.value)}
            required
          >
            <option value="kilogram">Kilogram</option>
            <option value="gram">Tons</option>
            <option value="quintal">Quintal</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price per quantity:</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit">List Product</button>
      </form>
    </div>
    </div>
    
  );
}

export default ListingProduct;
