import React, { Component, Fragment } from "react";
import './Traits.css';

import shortid from 'shortid';
var _ = require('lodash');
 
// https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_12_column_grid_2
// https://www.quackit.com/css/flexbox/examples/
class Traits extends Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this);
    this.createTraits = this.createTraits.bind(this);

    this.allTraits = this.props.allTraits;

    let combinedTraitsAndDays = _.zipObject(this.allTraits, _.map(this.allTraits, () => {
      return {
        Mon : 0, 
        Tues : 0,
        Wed : 0,
        Thurs : 0,
        Fri : 0,
        Sat : 0,
        Sun : 0}
    } ))
  
    this.state = combinedTraitsAndDays;
  }
   increaseCount(trait, day){
    let allTraits = this.state;
    allTraits[trait][day] += 1

    this.setState(
        allTraits[trait]
    )
  }
    
  createTraits(trait) {
    // TODO: Need to save state
    const days = ['Mon', 'Tues', 'Wed', 'Thurs',
                  'Fri', 'Sat', 'Sun']
    return <Fragment key={shortid.generate()}>
      <ul key={shortid.generate()} className="traits">
        <li key={shortid.generate()} className="trait" data-test-id={trait}>
            {trait}
        </li>
      
        {days.map((day) => 
            <li
                key={shortid.generate()} 
                onClick={() => this.increaseCount(trait, day)}
            >
            {this.state[trait][day]}
            </li>
        )}
      </ul> 
    </Fragment>       
  }
 
  render() {
    const listTraits = this.allTraits.map(this.createTraits);
    return (
      <div key={shortid.generate()}>
        {listTraits}
      </div>
    )
  }
};
 
 

export default Traits;
