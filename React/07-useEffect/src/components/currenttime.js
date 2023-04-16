import { useState, useEffect } from 'react';

export function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Add useEffect here to update the current time every second

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            <p>Current Time: {currentTime}</p>
        </div>
    );
}