import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Component/Title/Title.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:"Bonjouràtous", title2:"salut les copains"
    }
  }


  

componentDidMount() {
  this.setState({title:"ceci est un test"})
}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Titlefin title={} />
          <Title title={this.state} />
        <button onClick={()=>this.this.props.params.title()}>changetitle </button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
