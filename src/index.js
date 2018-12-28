import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Days from "./Days";
import Traits from "./Traits";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Days/>
        <Traits/>
    </div>,
    destination
);
