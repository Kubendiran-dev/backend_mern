 import React from 'react'
import { useNavigate } from 'react-router-dom'
 
 const Product = () => {

  const navigate = useNavigate();


  const product = {
    id:1,
    name: "iphone",
    price: 78000,
  };

  const goToDetails =()=>{
    navigate("/details",{state:product});
  };
  
  const editProduct = () => {
    navigate("/edit-product", { state: product });
  };
   return (
     <>
     <h2>Product Page</h2>
     <p>Name:{product.name}</p>
     <p>Price:{product.price}</p>
     
      <button onClick={goToDetails}>
        Go To Details Page
      </button>

      <button onClick={editProduct}>Edit Product</button>
     </>
   )
 }
 
 export default Product