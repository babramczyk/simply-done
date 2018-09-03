import React, { Component } from "react";

class TodosTab extends Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}

export default TodosTab;
