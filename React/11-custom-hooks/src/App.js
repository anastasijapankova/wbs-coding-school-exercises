import './App.css';
import CounterComponent from './components/counter'
import MousePosition from './components/mouse';
import LocalStorage from './components/storage'
import Fetch from './components/fetch'

function App() {


  return (
    <div className="App">
      <CounterComponent />
      <MousePosition />
      <LocalStorage />
      <Fetch />
    </div>
  );
}

export default App;
