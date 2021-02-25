import React from "react";
 
function Product(props) {
  const cards = props.appState.getCards()
  const cardID = props.match.params.key
  
  const specificCard = cards.filter((card) => cardID == card.id)[0];


  return (
      <div>
        <h2>{specificCard.title}</h2>
        <p><img className="cardImage" src = {specificCard.img}></img></p>
        <p>{specificCard.info}</p>
        <p>Game: {specificCard.catagory}</p>
        <p>Manufacturer: {specificCard.manufacturer}</p>
        <p>Condition: {specificCard.condition}</p>
        <p>Serial Number: {specificCard.serialnum}</p>
        <p>Price: ${specificCard.price}</p>
 
        <div id="buttonDiv">
          {
          (props.appState.getCart()).find(x => x.id == specificCard.id)?
            <button onClick ={() => props.appState.removeFromCart(specificCard)}>Remove from Cart</button>:

            <button onClick={() => props.appState.addToCart(specificCard)}>Add to Cart</button>
          }
          </div>
      </div>
    );
}
 
export default Product;