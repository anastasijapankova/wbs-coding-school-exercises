// 01

// Layout.js
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        {/* Header content */}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Layout;

// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// Home.js
function Home() {
    return <div>Home Page</div>;
  }
  
  export default Home;
  
  // About.js
  function About() {
    return <div>About Page</div>;
  }
  
  export default About;
  
  // Contact.js
  function Contact() {
    return <div>Contact Page</div>;
  }
  
  export default Contact;
  
// 02

// SidebarLayout.js
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function SidebarLayout() {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;


// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarLayout from './SidebarLayout';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// Dashboard.js
function Dashboard() {
    return <div>Dashboard Page</div>;
  }
  
  export default Dashboard;
  
  // Profile.js
  function Profile() {
    return <div>Profile Page</div>;
  }
  
  export default Profile;
  
  // Settings.js
  function Settings() {
    return <div>Settings Page</div>;
  }
  
  export default Settings;

  // Sidebar.js
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;