import { createContext, useReducer } from "react";

export const TodoContext = createContext([]);

export default function TodoProvider({ children }) {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, action.payload]

            case "REMOVE":
                const oldState = state
                oldState.splice(action.payload, 1)

                return [...oldState]

            case "TOGGLE":
                const oldStateToggle = state
                oldStateToggle[action.payload].completed = !oldStateToggle[action.payload].completed

                return [...oldStateToggle]

            default:
                return state;
        }
    }

    const [todos, dispatchTodo] = useReducer(reducer, [])

    return (

        <TodoContext.Provider value={{ todos, dispatchTodo }}>
            {children}
        </TodoContext.Provider>

    )
}