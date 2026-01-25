import { useLocation } from "react-router-dom";
import { useState } from "react";

const EditProduct = () => {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <h2>No product data found </h2>;
  }

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const saveProduct = () => {
    console.log("Updated Product:", { name, price });
    alert("Product Updated Successfully!");
  };

  return (
    <>
      <h2>Edit Product</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />

      <br /><br />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <br /><br />

      <button onClick={saveProduct}>
        Save
      </button>
    </>
  );
};

export default EditProduct;
