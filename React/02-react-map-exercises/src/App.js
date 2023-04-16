// 01-react-map-exercise (01,02,03,04,05)
import './App.css';
import { ShoppingList } from "./components/ShoppingList"
import UserTable from './components/UserTable';
import RandomNumbers from "./components/RandomNumbers";
import ColorBoxes from './components/ColorBoxes';
import { ImageGrid } from './components/ImageGrid';
import './components/ImageGrid.css'

export default function App() {
  return <div>
    <ShoppingList />
    <UserTable />
    <RandomNumbers />
    <ColorBoxes />
    <ImageGrid />
  </div>
}
