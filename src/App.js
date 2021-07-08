import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import MenShirts from "./components/Men/Men_shirts";
import ProductPage from "./components/Men/Product_page";
import Cart from "./components/Cart/Cart";
import Notion from "./notion";
import HomePage from "./components/Veggies/Homepage";
import VeggiesLandingPage from "./components/Veggies/VeggiesLandingPage";
import Footer from "./components/Veggies/Footer";
import Shop from "./components/Veggies/Shop";
import VeggieProduct from "./components/Veggies/ProductPage";
import CheckoutPage from "./components/Cart/Checkout";
import PageNotFound from "./components/404";
// import { getToken } from "./firebase";
import { useState } from "react";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderFailure from "./components/OrderFailure";
import UserOrders from "./components/Veggies/UserOrders";
import LandingPage from "./components/FoodDelivery/LandingPage";
import Restaurants from "./components/FoodDelivery/Restaurants";

// import './App.css'

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
          <Route path="/men-shirts">
            <MenShirts />
          </Route>
          <Route path="/product-detail">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/notion">
            <Notion />
          </Route>
          <Route exact path="/veggies">
            <VeggiesLandingPage />
          </Route>
          <Route exact path="/veggies/shop">
            <Shop />
          </Route>
          <Route exact path="/veggies/shop/product">
            <VeggieProduct />
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
          <Route path="/food/restaurants">
            <Restaurants />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        <a
          href="https://api.whatsapp.com/send?phone=919505961834&text=Hello!"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </Router>
    </div>
  );
}

export default App;
