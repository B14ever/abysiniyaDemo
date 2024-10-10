import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/layout/layout'
import Home from './pages/home/home'
import Product from './pages/product/Product';
import Blogs from './pages/blogs/Blogs';
import Faqs from './pages/faqs/Faqs';
import './App.css';

const App: React.FC = () => {
  return (
    <Router> {/* Use BrowserRouter as Router */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
