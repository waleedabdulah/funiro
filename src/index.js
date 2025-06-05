import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes , BrowserRouter } from 'react-router-dom'
import Home from './component/home/Home';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import SingleProduct from './component/single-product/SingleProduct';
import ProductComparison from './component/product-comparison/ProductComparison';
import Checkout from './component/checkout/Checkout';
import Cart from './component/cart/Cart';
import Shop from './component/shop/Shop';
import './styles.scss'
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { UIAdjustmentProvider } from './context/ui-adjustment-context/UIAdjustmentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UIAdjustmentProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Header /> 
        <App />
        <Footer />
      </React.StrictMode>
    </BrowserRouter>
  </UIAdjustmentProvider>
);
