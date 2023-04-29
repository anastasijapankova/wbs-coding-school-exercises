import './App.css';
import BasicUseState from './Components/BasicUseState';
import Axios from './Components/Axios';
import Pokemon from './Components/Pokemon';
import Team from './Components/Team';
import lisa from './images/lisa.png';
import patrick from './images/patrick.jpg'


function App() {
  return (
    <div className='App'>
      <Team
        name='Lisa Aldenderfer'
        image={lisa}
        role='CEO'
        email='lisa.aldenderfer@email.com'
      />
      <Team
        name='Patrick Ruescher'
        image={patrick}
        role='CFO'
        email='patrick.ruescher@email.com'
      />

      <BasicUseState />

      <Axios />

      <Pokemon />
    </div>
  );
}

export default App;
