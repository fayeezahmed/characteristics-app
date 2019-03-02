import React, { Component, Fragment } from "react";
import './Traits.css';

import shortid from 'shortid';

// https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_12_column_grid_2
// https://www.quackit.com/css/flexbox/examples/
class Traits extends Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this);
    this.createTraits = this.createTraits.bind(this);

    this.listTraitName = this.listTraitName.bind(this);
    this.allTraits = this.props.allTraits;

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

    listDayForTraits(day) {
        return <li className="trait">
                {day}
              </li>

    }

      listTraitName(traitName, days) { 
        console.log('fhaifhlshfla')
      return <Fragment> 
        <ul key={shortid.generate()} className="traits">
              <li key={shortid.generate()}  data-test-id={traitName}>
                  {traitName}
              </li>
          {Object.keys(days).map(day => { 
                return this.listDayForTraits(days[day]);
          })}
        </ul>
       </Fragment> }
    
    createTraits() {
    let currentState = this.state
      return <Fragment key={shortid.generate()}>
          { Object.keys(currentState).map(index => {
              const traitName = currentState[index]["traitName"];
              const days = currentState[index]["days"]
              return this.listTraitName(traitName, days)
          })
      }      
    </Fragment>
  }
 
  render() {
    const listTraits = this.createTraits();
    return (
      <div key={shortid.generate()}>
        {listTraits}
      </div>
    )
  }
};
 
 

export default Traits;
