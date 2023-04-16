// 01

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// 02

import { useState } from 'react';

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const newCelsius = e.target.value;
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e) => {
    const newFahrenheit = e.target.value;
    setFahrenheit(newFahrenheit);
    setCelsius(((newFahrenheit - 32) * 5) / 9);
  };

  return (
    <div>
      <input value={celsius} onChange={handleCelsiusChange} placeholder="Celsius" />
      <input value={fahrenheit} onChange={handleFahrenheitChange} placeholder="Fahrenheit" />
    </div>
  );
}

// 03

import { useState } from 'react';

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 04

import { useState } from 'react';

export function ColorPicker() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <div style={{ backgroundColor: selectedColor, width: '100px', height: '100px' }}></div>
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

// 05

import { useState } from 'react';
import './App.css';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Dark Mode Toggle</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

// App.css

.light-mode {
    background-color: white;
    color: black;
  }
  
  .dark-mode {
    background-color: #1e1e1e;
    color: white;
  }
  