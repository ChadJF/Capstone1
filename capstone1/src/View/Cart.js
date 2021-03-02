import React from "react";
import {
  NavLink,
} from "react-router-dom";
 
function Cart(props) {
  const cart = props.appState.getCart()

    return (
        <div>
          <h2>Thank You</h2>
          <p>Thank you for your purchase, please come again.</p>

          <div>
            <ul>
              {cart.map((card) => (
                <li className="listItem" key={card.id}><NavLink to={`/product/${card.id}`}><img className="cardImage" src = {card.img}></img></NavLink> {card.title}, Price: ${card.price}
                <div id="buttonDiv">
                {
                (props.appState.getCart()).find(x => x.id == card.id)?
                  <button onClick ={() => props.appState.removeFromCart(card)}>Remove from Cart</button>:

                  <button onClick={() => props.appState.addToCart(card)}>Add to Cart</button>
                }
                </div>
                </li>
              ))}
              <li><button onClick ={() =>{
                props.appState.removeCartFromCards()
                props.appState.removeCardsFromCart()
              }}>Checkout</button></li>
            </ul>
          </div>
        </div>
      );
}
 
export default Cart;