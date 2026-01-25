import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const order = {
    id: 101,
    product: "iPhone",
    status: "Pending",
  };

  const viewOrder = () => {
    navigate("/order-details", { state: order });
  };

  return (
    <>
      <h2>Orders Page</h2>
      <p>Order ID: {order.id}</p>
      <p>Product: {order.product}</p>
      <p>Status: {order.status}</p>

      <button onClick={viewOrder}>
        View Order
      </button>
    </>
  );
};

export default Orders;
