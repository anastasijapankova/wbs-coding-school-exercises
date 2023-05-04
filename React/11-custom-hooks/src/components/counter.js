import React from 'react';
import { useCounter } from '../custom-hooks/counter-hook';

const CounterComponent = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div className='counter-box'>
            <h1 className='counter-h'>Counter Custom Hook</h1>
            <div className='counter'>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default CounterComponent;