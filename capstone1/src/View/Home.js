import React from "react";
import { useState } from 'react';
import Search from "../Components/search";
import {
  NavLink,
} from "react-router-dom";

const Home = (props) => {
const cards = props.appState.getCards()
  
  const filterCards = (cards, query) => {
    if (!query) {
        return cards;
    }

    return cards.filter((card) => {
        const cardName = card.title.toLowerCase();
        return cardName.includes(query);
    });
};

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredCards = filterCards(cards, searchQuery);

    return (
      <div>
          <div>
          <h1 className="intro">Welcome</h1>
          <p>This is a collector's sale site exclusivly for Trading Card Games (TCG). This site is available for the sale of card collectables from sports to children's entertainment.</p>
          </div>
          <div>
            <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredCards.map((card) => (
                    <li className="listItem" key={card.id}><NavLink to={`/product/${card.id}`}><img className="cardImage" src = {card.img}></img></NavLink><p> {card.title}<br/><br/> Price: ${card.price}</p>
                    <div id="buttonDiv">
                    {
                    (props.appState.getCart()).find(x => x.id == card.id)?
                      <button onClick ={() => props.appState.removeFromCart(card)}>Remove from Cart</button>:

                      <button onClick={() => props.appState.addToCart(card)}>Add to Cart</button>
                    }
                    </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      );
}
 
export default Home;