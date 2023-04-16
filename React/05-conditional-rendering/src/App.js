// 05-conditional-rendering (01,02,03,04,05)
import { Greeting } from "./components/Greeting";
import { ToggleText } from "./components/ToggleText";
import { RoleNavigation } from "./components/RoleNavigation";
import { UserList } from "./components/UserList";
import { Greetings } from "./components/Greetings";
import './App.css';

function App() {

  let users = [
    {
      name: "Anastasija"
    },
    {
      name: "Lakmali"
    },
    {
      name: "Max"
    }
  ]

  return (
    <div>
      <Greeting />
      <ToggleText
        displayText={true} />
      <RoleNavigation
        role={'admin'} />
      <UserList
        names={users} />
      <Greetings
        isLoggedIn={true} />
    </div>
  );
}

export default App;
