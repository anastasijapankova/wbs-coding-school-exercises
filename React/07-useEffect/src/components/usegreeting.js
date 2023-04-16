import React, { useState, useEffect } from 'react';

export function UserGreeting() {
    const [greeting, setGreeting] = useState('');

    // Add useEffect here to determine the appropriate greeting based on the user's local time

    useEffect(() => {
        const currentTime = new Date().getHours();

        if (currentTime >= 5 && currentTime < 12) {
            setGreeting('Good morning');
        } else if (currentTime >= 12 && currentTime < 18) {
            setGreeting('Good afternoon')
        } else {
            setGreeting('Good evening')
        }
    }, []);

    return (
        <div>
            <h1>{greeting}, User!</h1>
        </div>
    );
}