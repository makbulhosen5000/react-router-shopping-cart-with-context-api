import React from 'react';
import { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const money = useContext(moneyContext);
    return (
      <div>
        <h1>Sister</h1>
        <p>{money}</p>
      </div>
    );
};

export default Sister;