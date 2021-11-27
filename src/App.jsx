import Home from "./pages/Home";
import React from 'react'
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
   return <Router>
      <div><Home/>
      <ProductList/>
      <ProductView/>
      <Cart/>
      </div>
   </Router>
}

export default App;