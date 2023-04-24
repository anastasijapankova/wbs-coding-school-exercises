import { ThemeContext } from './components/themeContext'
import { AuthContext } from './components/authContext'
import { useContext } from 'react';
import './App.css';

function App({ children }) {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext)

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

    </>

  );
}

export default App;
