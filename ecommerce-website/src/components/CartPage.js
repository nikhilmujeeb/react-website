import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import './CartPage.css';

function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty!</p> : (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.title} - ${item.price} x {item.quantity}</span>
                <div>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} className="btn btn-sm btn-outline-secondary">-</button>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} className="btn btn-sm btn-outline-secondary">+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-sm btn-danger ms-2">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default CartPage;
