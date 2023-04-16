// 06-useState (05)
import { useState } from 'react';
import './dark.css';

export function Dark() {
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