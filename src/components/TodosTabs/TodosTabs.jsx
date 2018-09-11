import React, { Component } from "react";
import TodoTab from "../TodosTab/TodosTab";
import "./TodosTabs.css";

class TodosTabs extends Component {
  render() {
    return <div className="tabs">{this.renderTabs()}</div>
  }

  renderTabs() {
    return this.props.tabs.map(tab => (
      <TodoTab title={tab.title} onClick={tab.onClick} key={tab.key} />
    ));
  }
}

export default TodosTabs;
