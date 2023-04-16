// 01
export function Greeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return <div>{greeting}</div>;
}

// 02

export const ToggleText = ({ displayText }) => {
  return (
    <>
      {displayText && <p>Hello, World!</p>}
    </>
  );
};

// 03

export const RoleNavigation = ({ role }) => {
  return (
    <nav>
      {role === 'admin' ? (
        <>
          <a href="/dashboard">Dashboard</a>
          <a href="/users">Users</a>
          <a href="/settings">Settings</a>
        </>
      ) : (
        <>
          <a href="/profile">Profile</a>
          <a href="/orders">Orders</a>
        </>
      )}
    </nav>
  );
};

// 04

export const UserList = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </>
  );
};

// 05

export function Greeting({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome back!" : "Please sign in."}</p>;
}