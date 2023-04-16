// 04-props (01,02,03)
import { UserInfo } from './components/UserInfo';
import { Box } from './components/Box';
import { GroceryList } from './components/GroceryList';
import { UserProfile } from "./components/UserProfile";
import './App.css';

function App() {

  const groceryItems = ["Milk", "Eggs", "Bread", "Butter"];

  return (
    <div>
      <UserInfo
        name="Anastasija"
        age="27"
      />
      <div>
        <Box color="red" size="100px" />
        <Box color="green" size="100px" />
        <Box color="blue" size="100px" />
        <Box color="yellow" size="100px" />
      </div>
      <GroceryList groceries={groceryItems} />
      <UserProfile
        name="Anastasija"
        surname="Pankova"
        street="Kreutzigerstr."
        city="Berlin"
        country="Germany"
      />
    </div>
  );
}

export default App;
