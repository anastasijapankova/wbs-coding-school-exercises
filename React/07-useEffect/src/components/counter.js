import { useState, useEffect } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    // Add useEffect here to update the document title with the current count

    useEffect(() => {
        document.title = `Count: ${count}`;
        return () => {
            document.title = 'React App';
        };
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <p>Count: {count}</p>
        </div>
    );
}