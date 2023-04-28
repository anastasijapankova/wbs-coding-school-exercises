import { ThemeContext } from './components/themeContext'
import { UserContext } from './components/userContext'
import { useContext } from 'react';
import { LanguageContext } from './components/languageContext'
import { Content } from './components/Content';
import './App.css';

function App({ children }) {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { isLoggedIn, toggleUserLog } = useContext(UserContext);
  const { language, handleChange } = useContext(LanguageContext);


  return (
    <>
      {/* 10-useContext (01) */}
      <div className={darkMode ? 'dark' : 'light'}>
        <h1>Hello World!</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        </button>
      </div>
      {/* 10-useContext (02) */}
      <div className='userLogin'>
        <h1>{isLoggedIn ? 'Hey! You are logged in' : 'Bye! You are logged out'}</h1>
        <button onClick={toggleUserLog}>
          {isLoggedIn ? 'Please log me out' : 'Please log me in'}
        </button>
      </div>
      {/* 10-useContext (03) */}
      <div className='language'>
        <Content />
        <select value={language} onChange={handleChange}>
          <option value="english">English</option>
          <option value="latvian">Latvian</option>
          <option value="russian">Russian</option>
        </select>
      </div>
    </>

  );
}

export default App;
