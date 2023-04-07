import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  let message ;
  if(cart.length === 0){
    message = <p>Please Add Some Product</p>
  }else{
    message = <p>Please Buy The Some Product</p>
  }
  return (
    <div>
      <h3>Order Summary:{cart.length}</h3>
      {cart.length <= 2 ? <span>Buy Minimum Two Product</span>:<span>Now You Are Boroloks</span>}
      {cart.length === 2 && <p>you will get double</p>}
      {cart.length === 2 || <p>you will not get</p>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>{" "}
        </p>
      ))}
    </div>
  );
};

export default Cart;
