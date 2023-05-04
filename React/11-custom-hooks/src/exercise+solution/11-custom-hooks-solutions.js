/**
 * 01 Counter Custom Hook
 */

// useCounter.js
import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

// CounterComponent.js
import React from 'react';
import { useCounter } from './useCounter';

const CounterComponent = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterComponent;

/**
 * 02 Mouse Position Custom Hook
 */

import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

// MousePositionComponent.js
import React from 'react';
import { useMousePosition } from './useMousePosition';

const MousePositionComponent = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      Mouse Position: ({x}, {y})
    </div>
  );
};

export default MousePositionComponent;

/**
 * 03 Fetch Data Custom Hook
 */

// useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// FetchDataComponent.js
import React from 'react';
import { useFetch } from './useFetch';

const FetchDataComponent = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchDataComponent;

/**
 * 04 Local Storage Custom Hook
 */

// useLocalStorage.js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

// LocalStorageComponent.js
import { useLocalStorage } from './useLocalStorage';

const LocalStorageComponent = () => {
  const [name, setName] = useLocalStorage('name', '');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name || 'Guest'}!</p>
    </div>
  );
};

export default LocalStorageComponent;

