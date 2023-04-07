import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from "react-hot-toast";

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);


    // add to cart item
    const handleAddToCart = tShirt =>{
        const exists = cart.find((ts) => ts._id === tShirt._id);
        if(exists){
            toast("Already Added this product")
        }else{    
           setCart([...cart, tShirt]);
        }

    }
    // remove cart item
    const handleRemoveCart = id =>{
        const remaining = cart.filter(ts=>ts._id !== id);
        setCart(remaining);
    }
        
    const notify = () => toast("Here is your toast.");

    return (
      <div className="home-container">
        <div className="t-shirt-container">
          {tshirts.map((tShirt) => (
            <TShirt
              tShirt={tShirt}
              key={tShirt._id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="">
          <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
        </div>
      </div>
    );
};

export default Home;