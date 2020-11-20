import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/CartFiles/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Model from "./components/Model";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/Products" component={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/About" component={About} />
        <Route path="/Cart" component={Cart} />
        <Route exact path="/" component={Home} />

        <Route component={Default} />
      </Switch>

      <Model></Model>
      <Footer />
    </Router>
  );
}

export default App;
