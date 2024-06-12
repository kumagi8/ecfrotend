import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from ".././Redux/cartSlice";
import * as Icons from "react-bootstrap-icons";
import { addItem } from ".././Redux/cartSlice";
import "./cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  // const [cartItems, setCartItems] = useState(null);
  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
    // const removeditem = cart.filter((c) => c.id !== id);
    // setCartItems(removeditem);
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
    // setCartItems(null);
  };
  function handleAddToCart(product) {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      })
    );
  }
  useEffect(() => {
    // setCartItems(cart);
  }, []);

  return (
    <div className="cart">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Your Shopping Cart</h2>
        <Link className="myorders" to="/orders">
          My Orders
        </Link>
      </div>
      {cart?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart?.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="prod-detail">
                <strong>{item.title}</strong>
                <span>Quantity: {item.quantity}</span>
                <span>Total Price: ${item.totalPrice.toFixed(2)}</span>
              </div>
              {item.quantity === 0 ? (
                <button onClick={() => removeItemHandler(item.id)}>
                  Remove
                </button>
              ) : (
                <div className="quantity-control">
                  <Icons.PlusCircleFill
                    size={20}
                    onClick={() => handleAddToCart(item)}
                  />
                  <p style={{ margin: 0 }}>{item.quantity}</p>
                  <Icons.DashCircleFill
                    size={20}
                    onClick={() => removeItemHandler(item.id)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      {cart?.length > 0 && (
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
