// The counters
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
        <button onClick={incrementAll}>Increase All</button>
        <button onClick={decrementAll}>Decrease All</button>
      </div>
    </>
  );
}

// The Candle

import { useState, useEffect } from 'react';
import './App.css';

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      if (candleHeight > 10) {
        setCandleHeight((height) => height - 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [candleHeight]);

  const replaceCandle = () => {
    setCandleHeight(80);
  };

  return (
    <>
      <div className="block">
        <div>
          <button onClick={replaceCandle}>Replace with new candle</button>
        </div>
      </div>

      <div className="block candleContainer">
        {candleHeight > 10 && (
          <div className="candle" style={{ height: `${candleHeight}%` }}>
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        )}
      </div>
    </>
  );
};

// The Bulb

import React, { useState, useEffect } from 'react';
import './App.css';

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  const [turnOnCount, setTurnOnCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setIsOn(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOn]);

  const toggleLight = () => {
    if (!isOn && turnOnCount < 10) {
      setIsOn(true);
      setTurnOnCount(turnOnCount + 1);
    } else if (turnOnCount >= 10) {
      setMessage('You used your daily electricity limit. Light a candle instead.');
    } else {
      setIsOn(false);
    }
  };

  return (
      <div className={isOn ? 'block' : 'block night'}>
        <a onClick={toggleLight}> turn me on! </a>
        <div className="container">
            <div className="bulb-light">
                <div id="light" />

                    <div id="bulb">
                        <div className="bulb-top">
                            <div className="reflection" />
                        </div>
                        <div className="bulb-middle-1" />
                        <div className="bulb-middle-2" />
                        <div className="bulb-middle-3" />
                        <div className="bulb-bottom" />
                    </div>

                    <div id="base">
                        <div className="screw-top" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-c" />
                        <div className="screw-d" />
                    </div>
                </div>
            </div>
        {message && <p>{message}</p>}
      </div>
  );
};