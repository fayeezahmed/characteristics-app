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
    componentDidMount(){
        console.log('DID MOUNT')
    } 
    componentWillMount(){
        console.log('MOUNTING')
    }
  componentDidUpdate(){
    console.log("DID UPDATE")
  }

    componentWillUpdate(){
        console.log('WILL UPDATE')
    }

  increaseCount(trait, day){
    this.setState(this.state, () => {
        this.state[trait][day] += 1
      })
  }

  createTraits(trait) {
    // console.log(this)
    // TODO: Needs to be dynamically generated
    // TODO: Need to save state
    return <Fragment>
      <ul key= {trait + "_Group"}className="traits">
        <li key={trait + 'trait'} className="trait">
            {trait}
        </li>
        <li key={trait + "Mon"} onClick={() => this.increaseCount(trait, "Mon")}>
          {this.state[trait]["Mon"]}
        </li>
        <li key={trait + "Tues"} onClick={() => this.increaseCount(trait, "Tues")}>
        {this.state[trait]["Tues"]}
        </li>
        <li key={trait + "Wed"} onClick={() => this.increaseCount(trait, "Wed")}>
        {this.state[trait]["Wed"]}
        </li>
        <li key={trait+ "Thurs"}onClick={() => this.increaseCount(trait, "Thurs")}>
        {this.state[trait]["Thurs"]}
        </li>
        <li key={trait + "Fri"} onClick={() => this.increaseCount(trait, "Fri")}>
        {this.state[trait]["Fri"]}
        </li>
        <li key={trait + "Sat"} onClick={() => this.increaseCount(trait, "Sat")}>
        {this.state[trait]["Sat"]}
        </li>
        <li key={trait + "Sun"} onClick={() => this.increaseCount(trait, "Sun")}>
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
