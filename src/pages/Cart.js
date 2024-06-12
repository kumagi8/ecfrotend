import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from ".././Redux/cartSlice";
import * as Icons from "react-bootstrap-icons";
import { addItem } from ".././Redux/cartSlice";
import { addOrder } from "../Redux/orderSlice";
import "./cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
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
  function handleOrder() {
    dispatch(
      addOrder({
        id: Date.now(),
        date: Date.now(),
        grossAmount: totalAmount,
        items: items,
      })
    );
    dispatch(clearCart());
  }

  return (
    <div className="cart">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Your Shopping Cart</h2>
        <Link className="myorders" to="/orders">
          My Orders
        </Link>
      </div>
      {items?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items?.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="prod-detail">
                <Link className="productlink" to={`/product?id=${item.id}`}>
                  <strong>{item.title}</strong>
                </Link>
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
      {items?.length > 0 && (
        <>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          <div className="car-order-btn">
            <button onClick={clearCartHandler} className="clear-cart">
              Clear Cart
            </button>
            <button className="add-order" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
