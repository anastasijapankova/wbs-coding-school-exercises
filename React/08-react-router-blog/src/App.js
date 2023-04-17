import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/home';
import { BlogPost } from './components/blogpost';
import { NotFound } from './components/notfound';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      {/* <Home /> */}
      <div className='nav-blog'>
        <Link to="/blog/post/1">Post 1</Link>
        <Link to="/blog/post/2">Post 2</Link>
        <Link to="/blog/post/3">Post 3</Link>
        <Link to="/blog/post/4">Post 4</Link>
        <Link to="/blog/post/5">Post 5</Link>
      </div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/blog/post/:Id" element={<BlogPost />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
