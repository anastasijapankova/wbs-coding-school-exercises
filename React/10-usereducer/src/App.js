import { CounterContext } from './components/counter'
import { ThemeContext } from './components/theme'
import { ThemeContent } from './components/content';
import { useContext } from 'react'
import './App.css';



export function App({ children }) {

  const { counter, dispatch } = useContext(CounterContext)


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

    </>
  );
}

export default App;
