import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 
import OrderHistory from './pages/OrderHistory';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
    return (
        <Router>
            <Header /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
