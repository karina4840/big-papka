import React from "react";
import Search from "./Search";

import "../styles/Header.css";

export default function Header({ searchCity }) {
    return ( 
        <header className = "Header">
        <h1 className = "Header__title">How's the weather in:</h1> 
        
        <Search searchCity = { searchCity }/> 
        </header>
    );
}