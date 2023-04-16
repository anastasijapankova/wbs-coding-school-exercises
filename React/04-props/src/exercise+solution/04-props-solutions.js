// 01

export function UserInfo({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// 02

export function Box({ color, size }) {
  const boxStyle = {
    backgroundColor: color,
    width: size,
    height: size,
  };

  return <div style={boxStyle}></div>;
}

// 03

export function GroceryList({ groceries }) {
  return (
    <ul>
      {groceries.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Parent component usage example
const groceryItems = ["Milk", "Eggs", "Bread", "Butter"];
// ... in the JSX
<GroceryList groceries={groceryItems} />

// 04

export function UserAddress({ street, city, country }) {
  return (
    <div>
      <p>Street: {street}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
    </div>
  );
}

function UserProfile({ name, email, street, city, country }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <UserAddress street={street} city={city} country={country} />
    </div>
  );
}

// Parent component usage example
// ... in the JSX
<UserProfile
  name="John Doe"
  email="john.doe@example.com"
  street="123 Main St"
  city="New York"
  country="USA"
/>
