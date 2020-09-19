import React from "react";
import Student from "./components/Student";
import Menu from "./components/Menu";
import './App.css'

export default (props) => {
    return (
        <div className="App">
            <Menu />
            <Student/>
        </div>
    );
}