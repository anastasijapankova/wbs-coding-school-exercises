import { useContext } from "react"
import { ThemeContext } from "./theme"
import { ThemeToggle } from '../components/toggle'
import '../App.css'

export const ThemeContent = () => {

    const { state } = useContext(ThemeContext)

    return (
        <div className={state === 'light' ? 'light' : 'dark'}>
            <h1>{state === 'light' ? 'Light' : 'Dark'} Mode is on</h1>
            <p>You can switch to {state === 'light' ? 'dark' : 'light'} mode, using the button below</p>
            <ThemeToggle />
        </div>
    )
}