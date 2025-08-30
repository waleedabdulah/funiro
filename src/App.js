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
import { Navigate } from "react-router-dom";
import Login from "./component/authentication-screens/login/Login";
import SignUp from "./component/authentication-screens/sign-up/SignUp";
import { ApiCall } from "./service/base-service/ApiService";
import { useEffect } from "react";
import { settingAllProductsInfo } from "./redux/slices/productItemsSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    
    async function gettingAllProductsInfo(){
      const response = await ApiCall.getAllProducts()
                      .then(res =>  res.data)
      dispatch(settingAllProductsInfo(response))
    }

    gettingAllProductsInfo()
  },[])
  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />        
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart-sidebar' element={<CartSidebar />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/single-product/:product_id' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-comparison' element={<ProductComparison />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    

    </div>
  );
}

export default App;
