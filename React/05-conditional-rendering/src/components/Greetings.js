export function Greetings({ isLoggedIn }) {

    return (
        <div>
            {isLoggedIn === true ? <p>Welcome back!</p> : <p>Please sign in.</p>}
        </div>
    )
}