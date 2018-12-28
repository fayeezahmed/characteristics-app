import React, { Component, Fragment } from "react";
 
class FocusTrait extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }
 
  createTasks(item) {
    
    return <Fragment>
                <div className="delete" onClick={() => this.delete(item.key)}>x</div>
                <li key={item.key}>{item.text}</li>
            </Fragment>
  }
 
  render() {
    const Focus

    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;