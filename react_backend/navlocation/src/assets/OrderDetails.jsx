import { useLocation } from "react-router-dom";
import { useState } from "react";

const OrderDetails = () => {
  const location = useLocation();
  const order = location.state;

  const [status, setStatus] = useState(order.status);

  return (
    <>
      <h2>Order Details Page</h2>

      <p>Order ID: {order.id}</p>
      <p>Product: {order.product}</p>
      <p>Status: {status}</p>

      <button onClick={() => setStatus("Delivered")}>
        Mark as Delivered
      </button>
    </>
  );
};

export default OrderDetails;
