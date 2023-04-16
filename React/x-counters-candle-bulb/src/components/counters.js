import React, { useState } from 'react';

function Counter({ index, value, onIncrement, onDecrement }) {
    return (
        <div>
            <h2>Counter {index + 1}: {value}</h2>
            <button onClick={() => onIncrement(index)}>+</button>
            <button onClick={() => onDecrement(index)}>-</button>
        </div>
    );
}

export function Counters() {
    const [counters, setCounters] = useState([0, 0, 0]);

    const increment = (index) => {
        setCounters(counters.map((value, i) => (i === index ? value + 1 : value)));
    };

    const decrement = (index) => {
        setCounters(counters.map((value, i) => (i === index ? value - 1 : value)));
    };

    const incrementAll = () => {
        setCounters(counters.map(value => value + 1));
    };

    const decrementAll = () => {
        setCounters(counters.map(value => value - 1));
    };

    return (
        <>
            <div class="block">
                <h1>Make It Count</h1>

            </div>

            <div class="block">
                {counters.map((value, index) => (
                    <Counter
                        key={index}
                        index={index}
                        value={value}
                        onIncrement={increment}
                        onDecrement={decrement}
                    />
                ))}
                <br />
                <button onClick={incrementAll}>Increase All</button>
                <button onClick={decrementAll}>Decrease All</button>
            </div>
        </>
    );
}
