import React from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Redirect,
  } from "react-router-dom";
import Home from "./View/Home";
import Product from "./View/Product";
import Cart from "./View/Cart";
import appData from "./appData.json";
import { useState } from 'react'

  function App() {
    const [cards, setCards] = useState(appData.cards)
    const [cart, setCart] = useState([])
    const getCards = () => {
      return(
        cards
      )
    }
    const getCart = () => {
      return(
        cart
      )
    }

    const addToCart = (card) => {
      cart.push(card);
      setCart([...cart])
    }

    const removeFromCart = (card) => { 
      const newCart = cart.filter(x => 
        {return !(x.id == card.id)})
        setCart(newCart)
    }

    function removeCartFromCards() { 
      let newCards = [...cards]
      cart.forEach( card =>
        {
          newCards = newCards.filter(x => 
            {return !(x.id == card.id)})
        }
      )
        setCards(newCards)
    }

    function removeCardsFromCart() { 
      let newCart = [...cart]
      cart.forEach( card =>
        {
          newCart = newCart.filter(x => 
            {return !(x.id == card.id)})
        }
      )
        setCart(newCart)
    }

    const appState = {getCards:getCards, setCards:setCards, getCart:getCart, setCart:setCart, addToCart:addToCart, removeFromCart:removeFromCart, removeCartFromCards:removeCartFromCards, removeCardsFromCart:removeCardsFromCart}

      return (
        <HashRouter>
          <div>
            <h1>Card Collection</h1>
            <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" render={props =>
            (<Home{...props} appState = {appState}/>)
            }  />
            <Route path="/product/:key" render={props => 
            (<Product{...props} appState = {appState}/>)
            } />
            <Route path="/cart" render={props =>
            (<Cart{...props} appState = {appState}/>)
            }  />
            </div>
          </div>
        </HashRouter>
      );
    }

export default App;