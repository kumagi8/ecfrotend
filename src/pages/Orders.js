import React, { useEffect, useState } from "react";
import "./orders.css";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="orders">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders?.map((order) => (
            <li key={order.id} className="order-item">
              <div>
                <strong>Order ID:</strong> {order.id}
              </div>
              <div>
                <strong>Date:</strong>{" "}
                {new Date(order.date).toLocaleDateString()}
              </div>
              <div>
                <strong>Total Amount:</strong> ${order.grossAmount?.toFixed(2)}
              </div>
              <div>
                <strong>Items:</strong>
                <ul>
                  {order?.items.map((item) => (
                    <li key={item.id}>
                      {item.title} - {item.quantity} x ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
