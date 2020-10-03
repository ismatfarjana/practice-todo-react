import React, { Component } from "react";
export default class Item extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name={this.props.item.task}
          value={this.props.item.task}
          checked={this.props.item.completed}
          onClick={() => this.props.updateCompleted(this.props.item)}
        />
        <label>{this.props.item.task}</label>
      </div>
    );
  }
}
