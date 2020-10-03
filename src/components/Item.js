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
          onChange={() => this.props.updateCompleted(this.props.item)}
        />
        <label>{this.props.item.task}</label>

        <button onClick={() => this.props.deleteItem(this.props.item._id)}>
          Delete
        </button>
      </div>
    );
  }
}

//delete one item:
//as a user:
//i want to:
//-click a delete button which will delete the item
// find a button that will delet => take the cursor over the delete button => click the button => it will do to data => find the id=> delet that item => new page will not have the item somehow?!
