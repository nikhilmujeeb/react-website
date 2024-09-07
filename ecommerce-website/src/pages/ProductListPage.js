import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addItem } from '../features/cart/cartSlice';
import './ProductListPage.css';

function ProductListPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="product-list-page">
      <h1>Product List</h1>
      <div className="product-list">
        {items.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
