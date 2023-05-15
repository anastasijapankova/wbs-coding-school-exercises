import { createContext, useState } from "react";
import { data } from './01-eshop-data'
export const CartContext = createContext();

export default function CartFunctionContext(props) {

    const [cart, setCart] = useState(0)
    const [products, setProducts] = useState(data)

    const increase = () => {
        setCart(cart + 1)
    }

    return <CartContext.Provider value={{ cart, setCart, increase, products, setProducts }}>
        {props.children}
    </CartContext.Provider>


}