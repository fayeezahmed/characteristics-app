import React, { Component, Fragment } from "react";
import { RIEInput  } from 'riek';
import _ from 'lodash';
import './FocusTrait.css';

class FocusTrait extends Component {
  constructor(props) {
        super(props);
        this.state = {
            titleText : 'Put trait here',
            quoteText : 'Put quote here'
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(newState) {
        console.log(newState)
        this.setState(newState)
    }

    render() {
        return (

        <Fragment> 
            <div className='headerContainer'>
                <RIEInput
                  className='title'
                  value={this.state.titleText}
                  change={this.changeState}
                  propName='titleText'
                  validate={_.isString} />

                <RIEInput
                  className='quote'
                  value={this.state.quoteText}
                  change={this.changeState}
                  propName='quoteText'
                  validate={_.isString} />
            </div>
        </Fragment>
        );
    }
};
 
export default FocusTrait;
