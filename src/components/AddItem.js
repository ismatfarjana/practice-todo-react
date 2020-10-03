import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitItem(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.handleSubmit}>
          Add a new todo
        </button>
      </div>
    );
  }
}
