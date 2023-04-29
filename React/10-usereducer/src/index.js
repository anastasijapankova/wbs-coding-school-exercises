import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Counter } from './components/counter';
import ThemeProvider from './components/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Counter>
        <App />
      </Counter>
    </ThemeProvider>
  </React.StrictMode>
);


