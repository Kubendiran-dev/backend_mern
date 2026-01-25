import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  const location = useLocation();
  const product = location.state;

  const [price,setPrice]= useState(product.price);
  return (
    <>
    <h1>Product Details</h1>
    <p>Name:{product.name}</p>
    <p>Price:{price}</p>           ✅


    <button onClick={()=>setPrice(price+500)}>Increase Price</button>
    </>
  )
}

export default ProductDetails