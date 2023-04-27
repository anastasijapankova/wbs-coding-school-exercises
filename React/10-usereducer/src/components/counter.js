import { createContext, useReducer } from "react";

export const CounterContext = createContext();

export function Counter(props) {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'Add':
                return state + 1;
            case 'Remove':
                return state - 1;
            case 'Reset':
                return state = 0;
        }
    }



    const [counter, dispatch] = useReducer(reducer, 0);

    return (

        <CounterContext.Provider value={{ counter, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    )

}

