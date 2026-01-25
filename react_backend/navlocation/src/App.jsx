import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './assets/Product'
import ProductDetails from './assets/ProductDetails'
import Profile from './assets/Profile'
import ThemeSwitcher from './assets/ThemeSwitcher'
import Orders from './assets/Orders'
import OrderDetails from './assets/OrderDetails'
import YourProduct from './assets/YourProduct'
import EditProduct from './assets/EditProduct'


const App = () => {
  return (
    <>
    <Routes>
<Route path="/" element={<Product/>}/>
<Route path="/details" element={<ProductDetails/>}/>
<Route path="/profile" element={<Profile />} />
<Route path="/theme/" element={<ThemeSwitcher/>}/>
<Route path="/orders" element={<Orders />} />
<Route path="/order-details" element={<OrderDetails />} />
<Route path="/YourProduct" element={<YourProduct/>} />
<Route path="/edit-product" element={<EditProduct />} />
    </Routes>
    </>
  )
}

export default App