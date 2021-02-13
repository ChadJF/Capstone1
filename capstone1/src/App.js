import React from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
  } from "react-router-dom";
  import Home from "./View/Home";
  import Product from "./View/Product";
  import Cart from"./View/Cart";
 
  function App() {
      return (
        <HashRouter>
          <div>
            <h1>News Site</h1>
            <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/product">Product View</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home}/>
            <Route path="/product" component={Product}/>
            <Route path="/cart" component={Cart}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  
 
export default App;