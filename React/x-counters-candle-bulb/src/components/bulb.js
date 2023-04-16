import React, { useState, useEffect } from 'react';
import './bulb.css';

export const Bulb = () => {
    const [isOn, setIsOn] = useState(false);
    const [turnOnCount, setTurnOnCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isOn) {
            const timer = setTimeout(() => {
                setIsOn(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isOn]);

    const toggleLight = () => {
        if (!isOn && turnOnCount < 10) {
            setIsOn(true);
            setTurnOnCount(turnOnCount + 1);
        } else if (turnOnCount >= 10) {
            setMessage('You used your daily electricity limit. Light a candle instead.');
        } else {
            setIsOn(false);
        }
    };

    return (
        <div className={isOn ? 'block' : 'block night'}>
            <a onClick={toggleLight}> turn me on! </a>
            <div className="container">
                <div className="bulb-light">
                    <div id="light" />

                    <div id="bulb">
                        <div className="bulb-top">
                            <div className="reflection" />
                        </div>
                        <div className="bulb-middle-1" />
                        <div className="bulb-middle-2" />
                        <div className="bulb-middle-3" />
                        <div className="bulb-bottom" />
                    </div>

                    <div id="base">
                        <div className="screw-top" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-a" />
                        <div className="screw-b" />
                        <div className="screw-c" />
                        <div className="screw-d" />
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};