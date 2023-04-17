// 00
npm install react-router-dom

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// 01
// Home.js
export function Home() {
    return <h1>Welcome to the Home page</h1>;
}

// About.js
export function About() {
    return <h1>About Us</h1>;
}

// Contact.js
export function Contact() {
    return <h1>Contact Us</h1>;
}
  
// 02
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* Routes will be added in the next exercise */}
    </BrowserRouter>
  );
}

// 03
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;