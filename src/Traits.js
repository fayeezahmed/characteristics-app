import React, { Component } from "react";
import './Traits.css';
 
class Traits extends Component {
  createTraits(trait) {
      return <li key={trait.toString()} className="trait">{trait}</li>   
  }
 
  render() {
    const traits = ['Trait1', 'Trait2', 'Trait3', 'Trait4']  

    var listTraits = traits.map(this.createTraits);
    return (
        <ul className="traits">
            {listTraits}
        </ul>
    )
  }
};
 
export default Traits;