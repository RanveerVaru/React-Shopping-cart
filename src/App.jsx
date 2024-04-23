import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./components/Data";



const App = () => {
  const [data ,setData] = useState([...items]);
  const [cart ,setCart] = useState([]);
  return (
    <>
    <Router>
      <div>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
