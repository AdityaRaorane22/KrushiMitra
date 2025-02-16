import React, { useEffect, useState } from 'react';
import './ViewMyProducts.css';

function ViewMyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = 'rajesh.verma@example.com'; // Hardcoded for testing, can use dynamic email fetching logic

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listed-products?email=${encodeURIComponent(email)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [email]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="view-products-container">
      <h2>My Products</h2>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Produce: {product.produce}</p>
              <p>Description: {product.description}</p>
              <p>Quantity: {product.quantity} {product.quantityType}</p>
              <img src={product.image1} alt={product.produce} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ViewMyProducts;
