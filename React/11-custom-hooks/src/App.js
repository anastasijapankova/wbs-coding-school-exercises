import './App.css';
import CounterComponent from './components/counter'
import MousePosition from './components/mouse';
import LocalStorage from './components/storage'

function App() {


  return (
    <div className="App">
      <CounterComponent />
      <MousePosition />
      <LocalStorage />
    </div>
  );
}

export default App;
