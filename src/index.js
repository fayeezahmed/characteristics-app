import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Days from "./Days";
import Traits from "./Traits";

var destination = document.querySelector("#container");
var traits = {
    'Patience': {
        key:'Patience', 
        trait:'Patience'
    }, 
    'Cheerfulness': {
        key:'Cheerfulness', 
        trait:'Cheerfulness'
    }
};

var test = 
{   'Patience' : {
        key:'Patience', 
    }, 
    'Cheerfulness' : {
        key:'Cheerfulness', 
    }
}
var test = ['Patience', 'Cheerfulness']
ReactDOM.render(
    <div>
        <Days propDays = {['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}/>
        <Traits allTraits = {test}/>
    </div>,
    destination
);
