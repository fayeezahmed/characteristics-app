import React, { Component, Fragment } from "react";
import './Traits.css';

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

  componentDidUpdate(){
    console.log(this.state);
  }

  increaseCount(trait, day){
    // console.log(trait, day)
    let traits = this.state;

   traits[trait][day] += 1
    this.setState = {traits};
    // console.log(this.state[trait]);
  }

  createTraits(trait) {
    // console.log(this)
    // TODO: Needs to be dynamically generated
    // TODO: Need to save state
    return <Fragment>
      <ul key= {trait.key + "_Group"}className="traits">
        <li key={trait.key} className="trait">
            {trait}
        </li>
        <li key={trait.key + "Mon"} onClick={() => this.increaseCount(trait, "Mon")}>
          {this.state[trait]["Mon"]}
        </li>
        <li key={trait.key + "Tues"} onClick={() => this.increaseCount(trait, "Tues")}>
        {this.state[trait]["Tues"]}
        </li>
        <li key={trait.key + "Wed"} onClick={() => this.increaseCount(trait, "Wed")}>
        {this.state[trait]["Wed"]}
        </li>
        <li key={trait.key + "Thurs"}onClick={() => this.increaseCount(trait, "Thurs")}>
        {this.state[trait]["Thurs"]}
        </li>
        <li key={trait.key + "Fri"} onClick={() => this.increaseCount(trait, "Fri")}>
        {this.state[trait]["Fri"]}
        </li>
        <li key={trait.key + "Sat"} onClick={() => this.increaseCount(trait, "Sat")}>
        {this.state[trait]["Sat"]}
        </li>
        <li key={trait.key + "Sun"} onClick={() => this.increaseCount(trait, "Sun")}>
        {this.state[trait]["Sun"]}
        </li>
      </ul> 
    </Fragment>       
  }
 
  render() {
    // const allTraits = this.props.allTraits;
    const listTraits = this.allTraits.map(this.createTraits);
    return (
      <div key="ALLTRAITS">
        {listTraits}
      </div>
    )
  }
};
 
 
export default Traits;