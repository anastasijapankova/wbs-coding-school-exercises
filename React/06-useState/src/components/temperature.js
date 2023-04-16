// 06-useState (02)
import { useState } from "react";

export function Temperature() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiumChange = (event) => {
        const newCelsius = event.target.value;
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9) / 5 + 32);
    }

    const handleFahrenheitChange = (event) => {
        const newFahrenheit = event.target.value;
        setFahrenheit(newFahrenheit)
        setCelsius(((newFahrenheit - 32) * 5) / 9)
    };


    return (
        <div>
            <input value={celsius} placeholder="celsius" onChange={handleCelsiumChange} />
            <input value={fahrenheit} placeholder="fahrenheit" onChange={handleFahrenheitChange} />
        </div>
    )
}

