// 01 User Theme Context

// ThemeContext.js
import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export default function ThemeProviderFunction({children}) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

}

// App.js
import Content from './Content';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeProviderFunction from './ThemeContext'

function App() {

  return (
      <ThemeProviderFunction>
        <ThemeSwitcher />
        <Content />
      </ThemeProviderFunction>
  );
}

export default App;

// ThemeSwitcher.js
import { useContext } from 'react';
import {ThemeContext} from './ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}

export default ThemeSwitcher;

// Content.js
import { useContext } from 'react';
import {ThemeContext} from './ThemeContext';

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      This is the content with {theme} theme
    </div>
  );
}

export default Content;

//*********************************************/
//*********************************************/
//*********************************************/

// 02 Authentication Context
// AuthContext.js
import { useState, createContext } from 'react';
export const AuthContext = createContext();

export default function AuthContextFunction({children}) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
    {children}
  </AuthContext.Provider>
};

// App.js
import { useContext } from 'react';
import {AuthContext} from './AuthContext';
import AuthContextFunction from './AuthContext';
import LoginComponent from './LoginComponent';
import Dashboard from './Dashboard';

function App() {

  const {isAuthenticated} = useContext(AuthContext)
  return (
      <AuthContextFunction>
        {isAuthenticated ? <Dashboard /> : <LoginComponent />}
      </AuthContextFunction>
  );
}

export default App;

// LoginComponent.js
import { useContext } from 'react';
import {AuthContext} from './AuthContext';

function LoginComponent() {
  const { login } = useContext(AuthContext);

  return (
    <button onClick={login}>Log in</button>
  );
}

export default LoginComponent;

// Dashboard.js
import { useContext } from 'react';
import {AuthContext} from './AuthContext';

function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>Log out</button>
    </>
  );
}

export default Dashboard;

//*********************************************/
//*********************************************/
//*********************************************/

// 03 Language Selector
// LanguageContext.js
import { useState, createContext } from 'react';
export const LanguageContext = createContext()

export default function LangContextFunction({children}) {

  const [language, setLanguage] = useState('en');

  return   <LanguageContext.Provider value={{ language, setLanguage }}>
    {children}
    </LanguageContext.Provider>
};

// App.js

import LanguageSelector from './LanguageSelector';
import LanguageContextFunction from './LanguageContext'
import Content from './Content';

function App() {

  return (
    <LanguageContextFunction>
      <LanguageSelector />
      <Content />
    </LanguageContextFunction>
  );
  }
  
  export default App;


  // LanguageSelector.js
  
  import { useContext } from 'react';
  import {LanguageContext} from './LanguageContext';
  
  function LanguageSelector() {
    const { language, setLanguage } = useContext(LanguageContext);
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
  
    return (
      <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    );
  }
  
  export default LanguageSelector;

  // Content.js

import { useContext } from 'react';
import {LanguageContext} from './LanguageContext';

const translations = {
  en: {
    title: 'Welcome',
  },
  es: {
    title: 'Bienvenido',
  },
};

function Content() {
  const { language } = useContext(LanguageContext);
  const { title } = translations[language];

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Content;
