// 07-useEffect (01,02,03,04,05)
import { Counter } from './components/counter';
import { UserGreeting } from './components/usegreeting';
import { CurrentTime } from './components/currenttime'
import { Timer } from './/components/timer';
import './App.css';

function App() {
  return (
    <div >
      <Counter />
      <UserGreeting />
      <CurrentTime />
      <Timer />
    </div>
  );
}

export default App;
