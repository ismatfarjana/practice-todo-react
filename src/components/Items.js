import React, { Component } from "react";
import axios from "axios";

//import  component item
import Item from "./Item";

//export component item
export default class Items extends Component {
  //call constructor
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      items: []
    };
  }
  //set variable for data getting from api by using axios
  getTodos = () => {
    axios.get("https://practice-with-todo-api.herokuapp.com/").then(res => {
      this.setState({ items: res.data });
    });
  };
  //component mounting: storing data from api in to the state when the page is loaded
  componentDidMount() {
    this.getTodos();
  }
  //render the data
  handleCompleted = item => {
    const completed = !item.completed;
    const task = item.task;
    const id = item._id;

    axios
      .post(`https://practice-with-todo-api.herokuapp.com/${id}/update`, {
        completed: completed,
        task: task
      })
      .then(res => {
        console.log(res);
        const updatedItem = this.state.items.map(item => {
          if (item._id === id) {
            item.completed = completed;
            item.task = task;
          }
          return item;
        });
        this.setState({ item: updatedItem });
      });
  };

  renderItems = () => {
    return this.state.items.map(item => {
      return (
        <Item
          key={item._id}
          item={item}
          updateCompleted={this.handleCompleted}
        />
      );
    });
  };
  //rendering
  render() {
    return (
      <div>
        <h2>Here is your TODO list</h2>
        {this.state.items.length ? this.renderItems() : <p>List is loading</p>}
      </div>
    );
  }
}
