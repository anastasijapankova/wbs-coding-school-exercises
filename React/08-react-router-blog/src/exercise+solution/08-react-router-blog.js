/**
 * Create a blog application with dynamic routes
 * 
 * - Install and import React Router components in your project
 * - Create the following components: Home, BlogList, BlogPost, and NotFound.
 * - Add static content to each component (e.g., headings and text).
 * - Create a list of blog posts in the BlogList component with a unique ID for each post. 
 *  Use the Link component to create a navigation link for each post with a path like /blog/:postId
 * - Configure routes in your App.js file using Routes and Route components. 
 * - Add a catch-all route for the NotFound component to handle 404 errors.
 * - In the BlogPost component, access the postId parameter from the route using the useParams hook from 'react-router-dom'.
 * - Render the blog post content based on the postId. For simplicity, use a hardcoded list of 
 * blog posts in the BlogPost component. 
 * In a real application, you would fetch this data from an API.
 * 
 */