// 06-useState (01)
import { useState } from "react"
export function Counter() {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            Counter: {counter}
            <br />
            <button onClick={increase}>Increase</button>
            <br />
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

