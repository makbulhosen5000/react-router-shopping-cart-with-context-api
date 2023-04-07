import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ringCon = useContext(ringContext);
    return (
      <div>
        <p>Special</p>
        <p>{ringCon}</p>
      </div>
    );
};

export default Special;