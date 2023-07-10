import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './ass_components/Layout';
import Home from './ass_pages/Home';
import About from './ass_pages/About';
import Basics from './ass_pages/Basics';
import Contact from './ass_pages/Contact';
import Magasin from './ass_pages/Magasin';
import Login from './ass_pages/Login';
import WishList from './ass_pages/WishList';
import CompareProducts from './ass_pages/CompareProducts';
import ForgotPassword from './ass_pages/ForgotPassword';
import ResetPassword from './ass_pages/ResetPassword';
import SignUp from './ass_pages/SignUp';
import SignUpSaved from './ass_pages/SignUp';
import SingleBlog from './ass_pages/SingleBlog';
import Blogs from './ass_pages/Blogs';
import Cart from './ass_pages/Cart';
import './App.css';
import ShippingPolicy from './ass_pages/ShippingPolicy';
import SingleProduct from './ass_pages/SingleProduct';
import RefundPolicy from './ass_pages/RefundPolicy';
import TermsAndConditions from './ass_pages/TermsAndConditions';
import Checkout from './ass_pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />}/>
       <Route path="magasin" element={<Magasin />}/>
       <Route path="about" element={<About />}/>
       <Route path="basics" element={<Basics />}/>
       <Route path="contact" element={<Contact />}/>
       <Route path="login" element={<Login />}/>
       <Route path="signup" element={<SignUp />}/>
       <Route path="signup1" element={<SignUpSaved />}/>
       <Route path="wishlist" element={<WishList />}/>
       <Route path="compare-products" element={<CompareProducts />}/>
       <Route path="publications" element={<Blogs />}/>
       <Route path="forgot-password" element={<ForgotPassword />}/>
       <Route path="reset-password" element={<ResetPassword />}/>
       <Route path="blog/:id" element={<SingleBlog />}/>
       <Route path="shipping-policy" element={<ShippingPolicy />}/>
       <Route path="refund-policy" element={<RefundPolicy />}/>
       <Route path="terms-and-conditions" element={<TermsAndConditions />}/>
       <Route path="product-details" element={<SingleProduct />}/>
       <Route path="cart" element={<Cart />}/>
       <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
