// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top product-image" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} USD</p>
                <button className="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
