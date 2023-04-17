import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import '../App.css'

export function Home() {
    return (
        <div className='App'>
            <h1>Welcome to Home page</h1>
            <p>You are on the Home page </p>
        </div>
    )
}