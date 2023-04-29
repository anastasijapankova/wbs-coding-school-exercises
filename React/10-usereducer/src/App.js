import { CounterContext } from './components/counter'
import { ThemeContext } from './components/theme'
import { ThemeContent } from './components/content';
import { useContext, useState } from 'react'
import { TodoContext } from './components/todo'
import './App.css';



export function App({ children }) {

  const { counter, dispatch } = useContext(CounterContext)
  const { todos, dispatchTodo } = useContext(TodoContext)

  const [todo, setTodo] = useState('')

  return (
    <>
      <div className="counter">
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch({ type: 'Add' })}>Add</button>
        <button onClick={() => dispatch({ type: 'Remove' })}>Remove</button>
        <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
      </div>
      <div className='theme'>
        <ThemeContent />
      </div>
      <div className='todo'>
        <h1>My To Do List</h1>
        <input placeholder="Type your task" value={todo} onChange={e => setTodo(e.target.value)} />
        <button onClick={() => dispatchTodo({ type: "ADD", payload: { todo, completed: false } })}>Add</button>
        {
          todos.map((item, idx) => <div className="item" key={idx}>
            {item.todo} Done: {item.completed ? "Yes" : "No"}
            <button className="action" onClick={() => dispatchTodo({ type: "TOGGLE", payload: idx })}>{item.completed
              ? 'Undo' : "Complete"}</button>
            <button className="action" onClick={() => dispatchTodo({ type: "REMOVE", payload: idx })}>Remove</button>
          </div>)
        }
      </div>
    </>
  );
}

export default App;
