import { NavLink } from "react-router-dom"
import '../App.css'

export function Navigation() {
    return (
        <nav className="navbar">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    )
}