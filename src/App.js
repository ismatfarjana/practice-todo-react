import React from "react";
import leaf from "./leaf.png";
import "./App.css";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Todo List</h1>
        <img alt="" className="leaf" src={leaf} />
        <p>This app is build by Syeda for MERN learning purpose</p>
        <a
          className="App-link"
          href="https://practice-with-todo-api.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Practice Todo API
        </a>

        <a
          className="App-link"
          href="https://github.com/ismatfarjana/prctice_todo_api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Practice Todo API Github repository
        </a>
      </header>

      <div className="list">
        <Items />
      </div>

      <div className="social">
        <a href="https://www.linkedin.com/in/syeda-ismat-farjana/">LinkedIn</a>

        <a href="https://twitter.com/ismat_farjana">Twitter</a>

        <a href="https://www.codewars.com/users/ismatfarjana">Code wars</a>
      </div>
    </div>
  );
}

export default App;
