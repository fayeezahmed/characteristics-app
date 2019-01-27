import React, { Component, Fragment } from "react";
import './Traits.css';
 
// https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_12_column_grid_2
// https://www.quackit.com/css/flexbox/examples/
class Traits extends Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this)
    this.createTraits = this.createTraits.bind(this)
    
    this.allTraits = this.props.allTraits;

    let alldays = this.allTraits.map(function(trait) {
      // dynamic creation of traits is not compiling
      console.log(trait.key)
      // https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
      let traitName = trait;
      let traitDays = {};
      console.log('TRAIT NAME', traitName)
      traitDays[traitName] = {
        Mon : 0, 
        Tues : 0,
        Wed : 0,
        Thurs : 0,
        Fri : 0,
        Sat : 0,
        Sun : 0
      };
      console.log(traitDays)
      return traitDays;
    });  

    console.log(alldays)
  
    this.state = alldays;
    // {
    //   Cheerfulness : {
    //     Mon : 0,
    //     Tues : 0,
    //     Wed : 0,
    //     Thurs : 0,
    //     Fri : 0,
    //     Sat : 0,
    //     Sun : 0,
    //   },
    //   Patience: {
    //     Mon : 0,
    //     Tues : 0,
    //     Wed : 0,
    //     Thurs : 0,
    //     Fri : 0,
    //     Sat : 0,
    //     Sun : 0,
    //   }
    // };
  }

  increaseCount(trait, day){
    // console.log(trait, day)
    let traits = this.state; 
    traits.map(function(stateTrait){
      if(trait, stateTrait[trait]){
        // console.log(trait, stateTrait[trait])
        stateTrait[trait][day] += 1
      }
    })
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
        
        </li>
        <li key={trait.key + "Tues"} onClick={() => this.increaseCount(trait, "Tues")}></li>
        <li key={trait.key + "Wed"} onClick={() => this.increaseCount(trait, "Wed")}></li>
        <li key={trait.key + "Thurs"}onClick={() => this.increaseCount(trait, "Thurs")}></li>
        <li key={trait.key + "Fri"} onClick={() => this.increaseCount(trait, "Fri")}></li>
        <li key={trait.key + "Sat"} onClick={() => this.increaseCount(trait, "Sat")}></li>
        <li key={trait.key + "Sun"} onClick={() => this.increaseCount(trait, "Sun")}></li>
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