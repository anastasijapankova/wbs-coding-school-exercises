import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeSetter from './components/themeContext';
import UserContextFunction from './components/userContext'
import LanguageContextFunction from './components/languageContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageContextFunction>
    <UserContextFunction>
      <ThemeSetter>
        <App />
      </ThemeSetter>
    </UserContextFunction>
  </LanguageContextFunction>
);

