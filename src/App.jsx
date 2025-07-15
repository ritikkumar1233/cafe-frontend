import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Product from "./components/Product";
import Products from "./components/Products";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Header from "./components/Header";
import "./App.css";
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
