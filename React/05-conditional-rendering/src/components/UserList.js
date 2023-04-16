export function UserList(props) {

    // console.log(props)

    return (
        <>
            {props.names?.length > 0 ? (
                <ul>
                    {props.names.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </>
    );
};