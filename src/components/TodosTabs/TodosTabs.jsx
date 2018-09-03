import React, { Component } from "react";
import TodoTab from "../TodosTab/TodosTab";

class TodosTabs extends Component {
  render() {
    return this.props.tabs.map(tab => (
      <TodoTab title={tab.title} onClick={tab.onClick} key={tab.key} />
    ));
  }
}

export default TodosTabs;
