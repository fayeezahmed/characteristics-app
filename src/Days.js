import React, { Component } from "react";
import './Days.css';
 
class Day extends Component {
  createDays(day) {
      return <li key={day.toString()} className="day">{day}</li>   
  }
 
  render() {
    var days = this.props.propDays
    var listDays = days.map(this.createDays);
    return (
        // maybe use a table instead? Here as well as traits?
        <ul key="dayofweek" className="days">
            {listDays}
        </ul>
    )
  }
};
 
export default Day;