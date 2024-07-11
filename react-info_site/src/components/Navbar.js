import React from "react";


export default function Navbar() {
    return (
        <nav className = "navBar">
            <img className = "nav--icon" src = "../images/react-icon-small.png" alt = ""/>
            <h3 className = "nav--logo--text" id = "facts">ReactFacts</h3>
            <h4 className = "nav--title">I Love React</h4>
        </nav>
    )
}