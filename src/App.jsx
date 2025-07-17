import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register.jsx";
import Product from "./components/Product.jsx";
import Products from "./components/Products.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";
import Admin from "./components/Admin.jsx";
import Orders from "./components/Orders.jsx";
import Footer from "./components/Footer.jsx";
import Users from "./components/Users.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Product />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
