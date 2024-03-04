import IndividualCounter from "./IndividualCounter";
import React, {useState} from "react";

const Total = () => {
    const [total, setTotal] = useState(0);

const updateTotal = (value) => {
    setTotal=(prevTotal => prevTotal + value);

};


 return (
  <div>
  
  <div>Total: {total }</div>
    </div>
 );
};

export default Total;