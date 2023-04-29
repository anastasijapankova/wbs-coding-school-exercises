import { useState, useEffect } from "react";
import Product from "./Product";
import { FaSpinner } from "react-icons/fa";

const Home = ({ products, cart, setCart }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    products &&
      setCategories(
        products.reduce((acc, curr) => {
          !acc.includes(curr.category) && acc.push(curr.category);
          return acc;
        }, [])
      );
  }, [products]);

  return (
    <main>
      <img
        className="hero"
        src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1154082/retina_500x200_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
        alt="Context logo"
      />
      <nav className="categories">
        <ul>
          {categories &&
            categories.map((category) => (
              <li
                key={crypto.randomUUID()}
                onClick={() =>
                  alert("Nothing here. This isn't a real website after all :)")
                }
              >
                {category[0].toUpperCase() + category.slice(1)}
              </li>
            ))}
        </ul>
      </nav>
      <div className="homeMain">
        <aside className="homeAside">
          <h3>Read more</h3>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/pulse/understanding-state-management-front-end-paradigm-jitendrasinh-gohil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  State Management
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/context.html#gatsby-focus-wrapper"
                  target="_blank"
                  rel="noreferrer"
                >
                  Context Docs
                </a>
              </li>
              <li>
                <a
                  href="https://beta.reactjs.org/learn/passing-data-deeply-with-context"
                  target="_blank"
                  rel="noreferrer"
                >
                  Passing Data Deeply with Context
                </a>
              </li>
              <li>
                <a
                  href="https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scaling Up with Reducer and Context
                </a>
              </li>
              <li>
                <a
                  href="https://beta.reactjs.org/reference/react/useReducer#usage"
                  target="_blank"
                  rel="noreferrer"
                >
                  useReducer Docs
                </a>
              </li>
              <li>
                <a
                  href="https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer"
                  target="_blank"
                  rel="noreferrer"
                >
                  useState vs useReducer
                </a>
              </li>
              <li>
                <a
                  href="https://redux.js.org/introduction/getting-started"
                  target="_blank"
                  rel="noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/whats-the-difference-between-usecontext-and-redux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Context vs Redux
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="cardWrapper">
          {products ? (
            products.map((product) => (
              <Product
                key={crypto.randomUUID()}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <FaSpinner className="spinner" />
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
