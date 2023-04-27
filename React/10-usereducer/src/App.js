import { CounterContext } from './components/counter'
import { useContext } from 'react'
import './App.css';



function App({ children }) {

  const { counter, dispatch } = useContext(CounterContext)


  return (
    <div className="counter">
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: 'Add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'Remove' })}>Remove</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>

  );
}

export default App;
