import { useContext } from "react"
import { ThemeContext } from './theme'

export const ThemeToggle = () => {
    const { state, dispatchTheme } = useContext(ThemeContext)

    return (
        <button onClick={() => dispatchTheme({ type: "TOGGLE" })}>{state === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</button>
    )
}