import { NavLink } from "react-router-dom"
import '../App.css';

export function Header() {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}