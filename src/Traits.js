import React, { Component, Fragment } from "react";
import './Traits.css';

import shortid from 'shortid';
var _ = require('lodash');

 function listTraitDayResults(dayResult) {
      console.log('listTraigh <<<<<<<<<<<<<<<,')
          return <Fragment>
                <li key={shortid.generate()} onClick={console.log('hello')}>
                     {dayResult}
                </li>
                </Fragment>
      }


// https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_12_column_grid_2
// https://www.quackit.com/css/flexbox/examples/
class Traits extends Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this);
    this.createTraits = this.createTraits.bind(this);

    this.listTraitName = this.listTraitName.bind(this);
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
  
    this.state = [];
    console.log(JSON.stringify(this.state));
  }
   increaseCount(trait, day){
       let allTraits = this.state;
       let numOfTraits = Object.keys(allTraits).length
       for (var i=0; i < numOfTraits; i++){
           if(allTraits[i]['traitName'] == trait){
               allTraits[i][day] += 1
           }
       }

        this.setState(
            allTraits[trait]
        )
  }

    componentDidMount() {
        console.log('COMPONENT MOUNTING')
        fetch('http://localhost:5000/characteristics')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("RESULT")
                    this.setState(result)
                    console.log(this.state)
                    console.log('after result')
            })
    }

  listTraitName(traitName, days) { 
        console.log('fhaifhlshfla')
      return <Fragment> <li key={shortid.generate()} className="trait" data-test-id={traitName}>
          {traitName}
          </li>
          <li> days</li>
           </Fragment> }
    createTraits() {
    // TODO: Need to save state
    // let foundTrait = this.state.filter(traits => {
    //    return traits.traitName == trait
    //})
    console.log('CREATE TRAITS')
    let currentState = this.state
      return <Fragment key={shortid.generate()}>
        <ul key={shortid.generate()} className="traits">
          { Object.keys(currentState).map(index => {
              const traitName = currentState[index]["traitName"];
              const days = currentState[index]["days"]
              return this.listTraitName(traitName, days)
              Object.keys(currentState[index]["days"]).forEach((day, value)=> {
                  console.log('su')
                    const dayResult = currentState[index]["days"][day]
                  {listTraitDayResults(index, day)}
              })
          })
      }      
        </ul>
    </Fragment>
          ;
          {/*
          
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
                  {/*
            {this.state[trait][day]}
            }
                  {
                      (this.state != [] ? this.state[0][day] : 0)
                  }
                  </li>
              )}

              </ul>*/ }
  }
 
  render() {
    const listTraits = this.createTraits(); // this.allTraits.map(this.createTraits);
    return (
      <div key={shortid.generate()}>
        {listTraits}
      </div>
    )
  }
};
 
 

export default Traits;
