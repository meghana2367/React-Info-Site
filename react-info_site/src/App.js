import React from "react";
import Navbar from "./components/Navbar.js";
import MainContent from "./components/Main.js";

export default function App(){
    return (
        <div className="container">
            <Navbar />
            <MainContent />
        </div>
    )
}