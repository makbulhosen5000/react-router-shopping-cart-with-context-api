import React from 'react';
import './TShirt.css';

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { name, picture, price, _id } = tShirt;


  return (
    <div className="t-shirt">
      <img src={picture} />
      <h3>Name:{name}</h3>
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;