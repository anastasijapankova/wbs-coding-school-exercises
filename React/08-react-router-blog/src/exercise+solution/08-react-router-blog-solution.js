// Home.js
export function Home() {
  return <h1>Welcome to the Blog Home</h1>;
}

// BlogList.js
export function BlogList() {
// Dummy blog data
const blogs = [
    { id: 1, title: 'Blog Post 1' },
    { id: 2, title: 'Blog Post 2' },
    { id: 3, title: 'Blog Post 3' },
];

return (
    <div>
    <h1>Blog List</h1>
    <ul>
        {blogs.map(blog => (
        <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

// BlogPost.js
export function BlogPost() {
    const { postId } = useParams();
    const post = getBlogPostById(postId); // Assume this function fetches the blog post based on the postId

return (
    <div>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    </div>
);
}

// NotFound.js
export function NotFound() {
return <h1>404 - Page Not Found</h1>;
}

// App.js
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={BlogList} />
        <Route path="/blog/:postId" component={BlogPost} />
        <Route path="*" component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
