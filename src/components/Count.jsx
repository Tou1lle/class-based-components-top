import React, { Component } from "react";

class CountClass extends Component {
  constructor(props) {
    super(props)
    
    this.getCount = this.getCount.bind(this);
  }

  getCount() {
    return this.props.todos.length;
  }

  render() {
    return (
      <p>number of todos: {this.getCount()}</p>
    )
  }
}

function CountFunctional({todos}) {
  return (
    <p>Number of todos: {todos.length}</p>
  )
}

export { CountFunctional, CountClass };