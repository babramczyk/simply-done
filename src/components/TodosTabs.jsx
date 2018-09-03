import React, { Component } from "react";
import TodoTab from "./TodosTab";

class TodosTabs extends Component {
  render() {
    return this.props.tabs.map(tab => <TodoTab title={tab.title} />);
  }
}

export default TodosTabs;
