import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from ".././Redux/cartSlice";
import "./cart.css";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(null);
  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
    const removeditem = cart.filter((c) => c.id !== id);
    setCartItems(removeditem);
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
    setCartItems(null);
  };

  useEffect(() => {
    setCartItems(cart);
  }, []);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems?.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <strong>{item.title}</strong>
                <span>Quantity: {item.quantity}</span>
                <span>Total Price: ${item.totalPrice.toFixed(2)}</span>
              </div>
              <button onClick={() => removeItemHandler(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems?.length > 0 && (
        <>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          <button onClick={clearCartHandler} className="clear-cart">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
