import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Component/List';


class App extends Component {
  onNewTodo(todo){
    console.log(todo);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Design expo</h1>
        </header>
      </div>
    );
  }
}

export default App;
