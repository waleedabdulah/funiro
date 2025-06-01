import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import ProductComparison from "./component/product-comparison/ProductComparison";
import Cart from "./component/cart/Cart";
import Shop from "./component/shop/Shop";
import SingleProduct from "./component/single-product/SingleProduct";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Checkout from "./component/checkout/Checkout";
import CartSidebar from "./component/cart-sidebar/CartSidebar";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart-sidebar' element={<CartSidebar />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-comparison' element={<ProductComparison />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    

    </div>
  );
}

export default App;
