import React, { useState, useEffect } from 'react'

export function Button() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="price-button">
            <button>Buy</button>
        </div>
    )
}