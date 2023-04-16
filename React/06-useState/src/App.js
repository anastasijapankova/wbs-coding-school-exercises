// 06-useState (01,02,03,04,05)
import './App.css';
import { Counter } from './components/counter'
import { Temperature } from './components/temperature'
import { Todo } from './components/todo'
import { Colors } from './components/colors';
import { Dark } from './components/dark'

function App() {
  return (
    <div>
      <Counter />
      <br />
      <Temperature />
      <br />
      <Todo />
      <br />
      <Colors />
      <br />
      <Dark />
    </div>
  );
}

export default App;
