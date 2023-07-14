import React from "react";
import "./styles.css";
import { Student } from "./Student";

export default function App() {
    return (
        <div className="App">
            <div className="block">
                In this exercise you will have to:
                <ul>
                    <li>
                        Create a Component <b>Student</b>
                    </li>
                    <li>
                        Your Component should be called with this form:{" "}
                        {'<Student name="John Doe">'} and should display{" "}
                        <b>Hello John Doe!</b>
                    </li>
                </ul>
                <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reactjs.org/docs/components-and-props.html"
                >
                    Help
                </a>
            </div>
            <div className="block">
                <Student name="John Doe" />
            </div>
        </div>
    );
}
