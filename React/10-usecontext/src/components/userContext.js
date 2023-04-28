import { createContext } from "react";
import { useState } from "react";


export const UserContext = createContext();

export default function UserContextFunction({ children }) {

    const [isLoggedIn, setIsLoggenIn] = useState(false);

    function toggleUserLog() {
        setIsLoggenIn(prev => !prev)
    }


    return (
        <UserContext.Provider value={{ isLoggedIn, toggleUserLog }}>
            {children}
        </UserContext.Provider>
    )
}