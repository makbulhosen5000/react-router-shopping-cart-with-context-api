import React from 'react';
import Cousin from '../Cousin/Cousin';
import { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const data = [
      { name: "hero", id: 1221 },
      { name: "Karim", id: 1222 },
      { name: "Rahim", id: 1223 },
    ];
    const result = data.find((person) => person.id === "1221");
    console.log(result);
    const [money,setMoney] = useContext(moneyContext);
    return (
      <div>
        <h1>Uncle</h1>
        <p>Grandpa Money {money}</p>
        <button onClick={()=>setMoney(money+1000)}>Sent 1k Money</button>
        <section className="flex">
          <Cousin>Nabil</Cousin>
          <Cousin>Nabila</Cousin>
        </section>
      </div>
    );
};

export default Uncle;