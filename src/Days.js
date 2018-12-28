import React, { Component } from "react";
import './Days.css';
 
class Day extends Component {
  createDays(day) {
      return <li key={day.toString()}>{day}</li>   
  }
 
  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']  

    var listDays = days.map(this.createDays);
    return (
        // maybe use a table instead? Here as well as traits?
        <ul className="days">
            <li></li>
            {listDays}
        </ul>
    )
  }
};
 
export default Day;