import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Days from "./Days";
import Traits from "./Traits";
import FocusTrait from './FocusTrait';
import shortid from 'shortid';

var destination = document.querySelector("#container");
var days = [
            '',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
];

var traits = [
            'Patience',
            'Cheerfulness',
            'Forgiveness',
            'Truth',
            'Sincere',
            'Cleanliness',
            'Honesty',
            'Humility',
            'Moderation',
            'Courage',
            'Salah'
];
ReactDOM.render(
    <div key={shortid.generate()}>
        <FocusTrait />
        <Days propDays = {days}/>
        <Traits allTraits = {traits}/>
    </div>,
    destination
);
