import React from "react";
import Search from "../Components/search";
import Items from "../objects.json";

const Home = () => {
  const cards = [Items];
  
    return (
      <div>
          <div>
          <h2>HELLO</h2>
          <p>General sale description goes here.</p>
          </div>
          <div>
            <Search />
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>{card.name}</li>
                ))}
            </ul>
          </div>
        </div>
      );
}
 
export default Home;