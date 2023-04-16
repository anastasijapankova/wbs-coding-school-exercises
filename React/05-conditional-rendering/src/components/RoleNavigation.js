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