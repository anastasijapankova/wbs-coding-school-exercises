import React from "react";
import "./styles.css";
import SuperButton from "./SuperButton";

export default function App() {
    return (
        <div className="App">
            <div className="block">
                In this exercise you will have to:
                <ul>
                    <li>
                        In your Component <b>SuperButton</b> display the text from the props{" "}
                        <b>text</b> instead of "change me"
                    </li>

                    <li>
                        In your Component <b>SuperButton</b> create an alert with the text
                        from the props <b>AlertText</b> when the button is clicked
                    </li>
                </ul>
                <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reactjs.org/docs/handling-events.html"
                >
                    Help
                </a>
            </div>
            <div className="block">
                <SuperButton text="Click Me" alertText="I've been clicked!" />
            </div>
        </div>
    );
}
