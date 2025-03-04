import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function Catalog({ cart, addToCart }) {
  const { categoryName } = useParams();

  // Sample product list
  const spareParts = [
    { id: 1, name: 'Brake Pads', price: 50.00, category: 'brakes', image: 'https://via.placeholder.com/300x200?text=Brake+Pads' },
    { id: 2, name: 'Brake Disc', price: 75.00, category: 'brakes', image: 'https://via.placeholder.com/300x200?text=Brake+Disc' },
    { id: 3, name: 'Oil Filter', price: 20.00, category: 'filters', image: 'https://via.placeholder.com/300x200?text=Oil+Filter' },
    { id: 4, name: 'Air Filter', price: 25.00, category: 'filters', image: 'https://via.placeholder.com/300x200?text=Air+Filter' },
    { id: 5, name: 'Spark Plug', price: 15.00, category: 'engines', image: 'https://via.placeholder.com/300x200?text=Spark+Plug' },
    { id: 6, name: 'Piston', price: 100.00, category: 'engines', image: 'https://via.placeholder.com/300x200?text=Piston' },
  ];

  // Show all parts if no category, filter if category exists
  const filteredParts = categoryName ? spareParts.filter((part) => part.category === categoryName) : spareParts;

  return (
    <div className="container py-5">
      <h1 className="mb-4">{categoryName ? `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Catalog` : 'Full Catalog'}</h1>
      <p>Browse our {categoryName ? `${categoryName} products` : 'complete product catalog'} below:</p>
      {filteredParts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="row">
          {filteredParts.map((part) => (
            <div className="col-md-4 mb-4" key={part.id}>
              <div className="card h-100 shadow-sm">
                <img src={part.image} className="card-img-top" alt={part.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{part.name}</h5>
                  <p className="card-text">${part.price.toFixed(2)}</p>
                  <button
                    className="btn btn-danger mt-auto"
                    onClick={() => addToCart(part)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <h3>Cart Items: {cart.length}</h3>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Catalog;