import React from "react";
import "./styles.css";

export default SuperButton = ({ text, alertText }) => {
    const handleClick = () => {
        alert(alertText);
    };

    return <button onClick={handleClick}>{text}</button>;
};
