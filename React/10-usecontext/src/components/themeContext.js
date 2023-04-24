//10-useContext (01)
import { createContext, useState } from 'react';

export const ThemeContext = createContext();


export default function ThemeSetter(props) {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    const theme = {
        darkMode,
        toggleDarkMode,
    }

    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}
