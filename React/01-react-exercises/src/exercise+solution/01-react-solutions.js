// 01

// Greeting.js:
const Greeting = () => {
  return (
    <div>
      Hello, React beginner!
    </div>
  );
};

export default Greeting;

// App.js:

import React from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;


// 02

const Header = () => {
  return (
    <header>
      <h1>Welcome to My App</h1>
      <h2>Learn React with these exercises</h2>
    </header>
  );
};

// 03

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023 Your Name</p>
      <p>Contact: <a href="mailto:support@yourapp.com">support@yourapp.com</a></p>
    </footer>
  );
};

// 04

const Card = () => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Example" />
      <h3>Card Title</h3>
      <p>This is a description of the card content.</p>
    </div>
  );
};

// 05

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// 06

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Card from './Card';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <main>
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export {Greeting, Header, Footer, Card, Navigation, Layout};
