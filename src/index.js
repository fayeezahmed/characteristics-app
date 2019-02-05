import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Days from "./Days";
import Traits from "./Traits";
import shortid from 'shortid';

var destination = document.querySelector("#container");
var days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var traits = ['Patience', 'Cheerfulness']
ReactDOM.render(
    <div key={shortid.generate()}>
        <Days propDays = {days}/>
        <Traits allTraits = {traits}/>
    </div>,
    destination
);
