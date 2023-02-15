import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

const todoItems = [
  {id:1,
  title:"Lorem ipsum",
  description:"Test 1",
  completed:false,
  due_date:"16.02"
},
{id:2,
  title:"Lorem ipsum smth random",
  description:"Test 2",
  completed:false,
  due_date:"16.02"
},

]
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewCompleted:false,
      todoList: todoItems,
    }
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
