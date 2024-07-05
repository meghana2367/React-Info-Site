import React from "react";


export default function Navbar() {
    return (
        <nav class = "navBar">
            <img className = "nav--icon" src = "../images/react-icon-small.png" alt = "hello"/>
            <h3 className = "nav--logo--text" id = "facts">ReactFacts</h3>
            <h4 className = "nav--title">React Course - Project 1</h4>
        </nav>
    )
}