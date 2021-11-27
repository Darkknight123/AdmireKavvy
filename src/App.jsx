import Home from "./pages/Home";
import React from "react";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import {Router} from "@reach/router"

const App = () => {
  return(
    <Router>
      <Home path="/"/>
      <ProductList path="/products"/>
      <Cart path="/cart"/>
      <ProductView path="/view"/>
    </Router>
 )
};

export default App;
