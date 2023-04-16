// 01

// ShoppingList.js:
const ShoppingList = () => {
  const items = ['Milk', 'Eggs', 'Bread'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ShoppingList;

// App.js
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <ShoppingList />
    </div>
  );
}

export default App;

// 02

// UserTable.js:

const UserTable = () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com', age: 30 },
    { name: 'Bob', email: 'bob@example.com', age: 25 },
    { name: 'Carol', email: 'carol@example.com', age: 28 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

// App.js
import UserTable from './UserTable';

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;

// 03

// RandomNumbers.js:

const RandomNumbers = () => {
  const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default RandomNumbers;

// App.js
import RandomNumbers from './RandomNumbers';

function App() {
  return (
    <div className="App">
      <RandomNumbers />
    </div>
  );
}

export default App;

// 04

// ColorBoxes.js:

import './ColorBoxes.css';

const ColorBoxes = () => {
  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div className="color-boxes-container">
      {colors.map((color, index) => (
        <div key={index} className="color-box" style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

export default ColorBoxes;

// App.js
import ColorBoxes from './ColorBoxes';

function App() {
  return (
    <div className="App">
      <ColorBoxes />
    </div>
  );
}

// 05

// ImageGrid.js:

import './ImageGrid.css';

const ImageGrid = () => {
  const images = [
    'https://via.placeholder.com/100x100',
    'https://via.placeholder.com/100x100',
    'https://via.placeholder.com/100x100',
    'https://via.placeholder.com/100x100',
    'https://via.placeholder.com/100x100',
    'https://via.placeholder.com/100x100',
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Grid item ${index}`} />
      ))}
    </div>
  );
};

export default ImageGrid;

// ImageGrid.css:

.image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  
  .image-grid img {
    width: 100%;
    height: auto;
  }
  

// App.js
import ImageGrid from './ImageGrid';

function App() {
  return (
    <div className="App">
      <ImageGrid />
    </div>
  );
}
