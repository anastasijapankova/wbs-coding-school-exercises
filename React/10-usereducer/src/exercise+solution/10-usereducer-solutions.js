/**
 * 01 Basic Counter with useReducer
 */

// CounterContext.js
import { createContext, useReducer } from "react";

export const CounterContext = createContext(0);

export default function CounterProvider({children}) {

    const reducer = (state, action) => {
        switch (action.type) {
          case "INCREMENT":
            return state + 1;
          case "DECREMENT":
            return state - 1;
          case "RESET":
            return initialState;
          default:
            return state;
        }
      };

    const [counter, dispatch] = useReducer(reducer, 0);

    return (
        <CounterContext.Provider value={{counter, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

// App.js
import {CounterContext} from './components/CounterContext'
import CounterProvider from './components/CounterContext'
import { useContext } from "react";


function App() {
  
    const {counter, dispatch} = useContext(CounterContext)

  return (
    <CounterProvider>
        <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    </CounterProvider>
  );
}

export default App;

/**
 * 02 Managing a Todo List with useReducer
 */

// TodoContext.js
import { createContext, useReducer } from "react";

export const TodoContext = createContext({todos: []});

export default function TodoProvider({children}) {

    const reducer = (state, action) => {
        switch (action.type) {
          case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
          case "TOGGLE_TODO":
            return {
              ...state,
              todos: state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              ),
            };
          case "DELETE_TODO":
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
          default:
            return state;
        }
      };

    const [state, dispatch] = useReducer(reducer, {todos: []});

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

// components/AddTodo.js:
import { useState, useContext } from "react";
import {TodoContext} from './components/TodoContext'

const AddTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");

  const {dispatch} = useContext(TodoContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title, completed: false } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;

// components/TodoList.js:
import TodoItem from "./TodoItem";

const TodoList = ({ state, dispatch }) => {
  return (
    <ul>
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;


// App.js
import { useContext } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { TodoContext } from "./components/TodoContext";
import TodoProvider from './components/TodoContext'

function App() {

    const {state, dispatch} = useContext(TodoContext)

  return (
    <TodoProvider>
        <div>
        <h1>Todo List</h1>
        <AddTodo dispatch={dispatch} />
        <TodoList state={state} dispatch={dispatch} />
        </div>
    </TodoProvider>
  );
}

export default App;

/**
 * 03 Sharing state between components with useContext
 */

// contexts/ThemeContext.js
import { createContext, useReducer } from "react";

export const ThemeContext = createContext('light');

export default function ThemeContextProvider ({children}) {
  
  const reducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE':
            
            return state === "light" ? "dark" : "light"
    
        default:
            break;
    }
  }

  const [state, dispatch] = useReducer(reducer, 'light')
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
);
};

// components/ThemeToggle.js
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { dispatch } = useContext(ThemeContext);

  return <button onClick={() => dispatch({type: "TOGGLE"})}>Toggle Theme</button>;
};

export default ThemeToggle;


// components/Content.js

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Content = () => {
  const { state } = useContext(ThemeContext);

  const contentStyle = {
    backgroundColor: state === "light" ? "white" : "black",
    color: state === "light" ? "black" : "white",
  };

  return (
    <div style={contentStyle}>
      <h1>Content Component</h1>
      <p>Some content...</p>
    </div>
  );
};

export default Content;


// App.js
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Content from "./components/Content";


function App() {
  return (
    <ThemeContextProvider>
      <Content />
      <ThemeToggle />
    </ThemeContextProvider>
  );
}

export default App;
