import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import MenShirts from "./components/Men/Men_shirts";
import ProductPage from "./components/Men/Product_page";
import Notion from "./notion";
import HomePage from "./components/Veggies/Homepage";
import VeggiesLandingPage from "./components/Veggies/VeggiesLandingPage";
import Footer from "./components/Veggies/Footer";
import VeggieProduct from "./components/Veggies/ProductPage";
import PageNotFound from "./components/404";
// import { getToken } from "./firebase";
import { useState } from "react";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderFailure from "./components/OrderFailure";

/* import Cart from "./components/Cart/Cart";
import Shop from "./components/Veggies/Shop";
import CheckoutPage from "./components/Cart/Checkout";
import UserOrders from "./components/Veggies/UserOrders";
import LandingPage from "./components/FoodDelivery/LandingPage"; */

import Restaurants from "./components/FoodDelivery/Restaurants";
import HomePageTwo from "./components/FoodDelivery/HomePage";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AboutUs from "./components/AboutUs";
import ReturnRefund from "./components/Return_Refund";
import Privacy from "./components/Privacy";
import Cancellation from "./components/Cancellation";
import TC from "./components/T_C";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loading from "./components/Loading";
import Team from "./components/Team";
import FruitsLand from "./components/Fruits/FruitsLand";
import Cashews from "./components/Fruits/Cashews";
import Detail from "./components/FoodDelivery/Detail";

// import './App.css'

// const Home = lazy(() => import("./components/Home"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const CheckoutPage = lazy(() => import("./components/Cart/Checkout"));
const Shop = lazy(() => import("./components/Veggies/Shop"));
const UserOrders = lazy(() => import("./components/Veggies/UserOrders"));
const LandingPage = lazy(() => import("./components/FoodDelivery/LandingPage"));

function App() {
  /* const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound); */

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/men-shirts">
            <MenShirts />
          </Route>
          <Route path="/product-detail">
            <ProductPage />
          </Route> */}
          <Route path="/cart">
            <Cart />
          </Route>
          {/* <Route path="/notion">
            <Notion />
          </Route> */}
          <Route exact path="/veggies">
            <VeggiesLandingPage />
          </Route>
          <Route exact path="/veggies/shop">
            <Shop />
          </Route>
          {/* <Route exact path="/veggies/shop/product">
            <VeggieProduct />
          </Route> */}
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/order/confirm">
            <OrderConfirmation />
          </Route>
          <Route path="/order/failure">
            <OrderFailure />
          </Route>
          <Route path="/user/orders">
            <UserOrders />
          </Route>
          <Route path="/food-delivery">
            <LandingPage />
          </Route>
          <Route path="/resto-name">
            <Detail />
          </Route>
          <Route path="/fruits">
            <FruitsLand />
          </Route>
          <Route path="/dryfruits/cashews">
            <Cashews />
          </Route>
          {/* <Route path="/resto">
            <Restaurants />
          </Route> */}
          <Route path="/hello">
            <HomePageTwo />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/returnandrefund">
            <ReturnRefund />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/cancellation">
            <Cancellation />
          </Route>
          <Route path="/termsandconditions">
            <TC />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
        {/* <Suspense
          fallback={<div style={{ color: "#000" }}>Loading Footer....</div>}
        >
        </Suspense> */}
        <a href="/cart" className="cart_float">
          <ShoppingCartIcon />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=918790462050&text=Hello!"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>
      </Router>
    </div>
  );
}

export default App;
