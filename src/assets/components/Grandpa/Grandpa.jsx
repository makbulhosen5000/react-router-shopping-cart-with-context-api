import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
import Father from '../Father/Father';

export const ringContext = createContext("gold");
export const moneyContext = createContext(2000);

const Grandpa = () => {
    const [money,setMoney] = useState(2000);
    return (
      <div className="grandpa">
        <h1>Grandpa</h1>
        <moneyContext.Provider value={[money, setMoney]}>
          <ringContext.Provider value={'golden ring'}>
            <section className="flex">
              <Father />
              <Uncle />
              <Aunty />
            </section>
          </ringContext.Provider>
        </moneyContext.Provider>
      </div>
    );
};

export default Grandpa;