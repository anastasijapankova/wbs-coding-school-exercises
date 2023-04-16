// 06-useState (04)
import { useState } from "react";

export function Colors() {

    const colors = ['red', 'blue', 'yellow', 'green'];
    const [selectedColor, setSelectedColor] = useState(colors[0]);


    return (
        <div>
            <div style={{ backgroundColor: selectedColor, width: '200px', height: '200px' }}></div>
            <select value={selectedColor} onChange={(event) => setSelectedColor(event.target.value)}>
                {colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                ))}
            </select>
        </div >
    )
}