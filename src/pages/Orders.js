import React, { useEffect, useState } from "react";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "1",
      date: "2023-01-01",
      totalAmount: 150.0,
      items: [
        { id: "a1", name: "Product A", quantity: 2, price: 50.0 },
        { id: "b1", name: "Product B", quantity: 1, price: 50.0 },
      ],
    },
    {
      id: "2",
      date: "2023-02-15",
      totalAmount: 200.0,
      items: [
        { id: "c1", name: "Product C", quantity: 1, price: 100.0 },
        { id: "d1", name: "Product D", quantity: 2, price: 50.0 },
      ],
    },
  ]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // Simulating an API call to fetch orders
  //     const fetchOrders = async () => {
  //       try {
  //         // Replace with your API call
  //         const response = await fetch("/api/orders");
  //         const data = await response.json();
  //         setOrders(data);
  //       } catch (error) {
  //         console.error("Failed to fetch orders:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchOrders();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

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
                <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
              </div>
              <div>
                <strong>Items:</strong>
                <ul>
                  {order?.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
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
