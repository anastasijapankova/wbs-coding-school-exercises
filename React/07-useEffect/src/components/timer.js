import { useState, useEffect } from "react";
export function Timer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunnig] = useState(false);

    const handleStartPause = () => {
        setIsRunnig(!isRunning);
    }

    const handleReset = () => {
        setTime(0);
        setIsRunnig(false)
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);


    return (
        <div>
            <p>Time Now: {time} seconds</p>
            <button onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}