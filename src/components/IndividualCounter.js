import React, { useState } from 'react';


const IndividualCounter = () => {
 const [number, setNumber] = useState(0);

 const onDecrement = () => (
  setNumber((prevNumber) => prevNumber - 1)
 );
 setNumber();

 const onIncrement = () => {
  setNumber((prevNumber) => prevNumber + 1)
 };
 setNumber();

 

 return (
  <div>
  <button onClick={onDecrement}>-</button>
  <button onClick={onIncrement}>+</button>
  {/* <button onClick={remove}>Delete Item</button> */}
  </div>
 );
};

export default IndividualCounter;