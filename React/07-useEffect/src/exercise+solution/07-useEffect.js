/**
 * 01
 * In the following code add the missing code so when the button is being clicked then
 * the document title gets updated when the counter gets updated.
 * 
 */

import { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  // Add useEffect here to update the document title with the current count

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

/**
 * 02
 * 
 * Add the missing part in the following code that displays a greeting message based on the user's local time (morning, afternoon, or evening).
 */

import React, { useState, useEffect } from 'react';

export function UserGreeting() {
  const [greeting, setGreeting] = useState('');

  // Add useEffect here to determine the appropriate greeting based on the user's local time

  return (
    <div>
      <h1>{greeting}, User!</h1>
    </div>
  );
}

/**
 * 03
 * 
 * Add the missing part in the following code that displays the current time and updates it every second.
 * 
 */

import { useState, useEffect } from 'react';

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Add useEffect here to update the current time every second

  return (
    <div>
      <p>Current Time: {currentTime}</p>
    </div>
  );
}



/**
 * 04 - Timer
 * Create a timer application that allows the user to start, pause, and reset the timer. 
 * Use the useState hook to manage the timer state, including the current time and the timer status 
 * (running or paused). 
 * Update the timer display as the time changes.
 * Use the useEffect hook to update the time
 * 
 */