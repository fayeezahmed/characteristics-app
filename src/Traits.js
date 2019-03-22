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
    this.patchState = this.patchState.bind(this);

    this.state = [];
  }

   increaseCount(trait, day){
       let currentState = this.state;
       Object.keys(currentState)
        .filter((key) =>  {
            if( currentState[key]['traitName'] == trait){
                currentState[key]['days'][day] += 1
                this.setState(currentState)
                console.log(currentState[key])
                this.patchState(JSON.stringify(currentState[key]))
            }
        })
    }

    patchState(state) {
        return fetch('http://localhost:5000/characteristics/updateOne', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: state
        })
    }

    componentDidMount() {
        fetch('http://localhost:5000/characteristics')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(result)
            })
    }

    listDayForTraits(trait, dayValue, dayKey) {
        return <li className="trait" onClick={() => this.increaseCount(trait, dayKey)}>
                {dayValue}
              </li>
    }

    listTraitName(traitName, days) { 
        return <Fragment> 
        <ul key={shortid.generate()} className="traits">
            <li key={shortid.generate()}  data-test-id={traitName} className="traitName">
              {traitName}
            </li>
            {Object.keys(days).map(day => { 
                return this.listDayForTraits(traitName, days[day], day);
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
