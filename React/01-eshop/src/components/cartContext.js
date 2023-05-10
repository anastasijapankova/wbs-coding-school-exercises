import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartFunctionContext(props) {

    const [cart, setCart] = useState(0)

    const increase = () => {
        setCart(cart + 1)
    }

    return <CartContext.Provider value={{ cart, setCart, increase }}>
        {props.children}
    </CartContext.Provider>


}