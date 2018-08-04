import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <form className="create-todo" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.text}
          onChange={e => this.handleTextChange(e)}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
  }
}

export default CreateTodo;
