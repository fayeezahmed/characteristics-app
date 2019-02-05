import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Days from "./Days";
import Traits from "./Traits";

var destination = document.querySelector("#container");
var days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var traits = ['Patience', 'Cheerfulness']
ReactDOM.render(
    <div>
        <Days propDays = {days}/>
        <Traits allTraits = {traits}/>
    </div>,
    destination
);
