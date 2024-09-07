// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(productId))
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail-page">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart} className="btn btn-success">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetailPage;
