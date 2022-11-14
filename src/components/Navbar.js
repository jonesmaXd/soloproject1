import React from "react";
import reactLogo from "../images/react-icon.png"

export default function Navbar() {
    return (
        <nav className={"header-bar"}>
                <img className="react-logo" src={reactLogo}  alt={"a react logo"}/>
                <h3 data-testid="reactfacts">ReactFacts</h3>
                <h4>React course - project 1 - Built by Jones</h4>
        </nav>
    )
}
