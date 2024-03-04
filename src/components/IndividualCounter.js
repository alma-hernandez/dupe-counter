import React, { useState } from 'react';

const IndividualCounter = ({ updateTotal }) => {
    const [number, setNumber] = useState(0);

    const onDecrement = () => {
        if (number > 0) {
            setNumber(prevNumber => prevNumber - 1);
            updateTotal(-1);
        }
    };

    const onIncrement = () => {
        setNumber(prevNumber => prevNumber + 1);
        updateTotal(1);
    };

    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <span>{number}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};

export default IndividualCounter;
