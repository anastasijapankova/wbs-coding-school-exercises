import { createContext, useReducer } from "react";

export const ThemeContext = createContext('light');

export default function ThemeProvider({ children }) {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'TOGGLE':
                return state === 'light' ? 'dark' : 'light'
            default:
                break;
        }
    }

    const [state, dispatchTheme] = useReducer(reducer, 'light')

    return (
        <ThemeContext.Provider value={{ state, dispatchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}