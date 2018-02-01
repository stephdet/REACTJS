import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './Component/UserInput.js';
import UserOutput from './Component/UserInput.js';


class App extends Component {
  state = {
    persons:[
      {name:"steve", age:25},
      {name:"manu", age:23},
      {name:"Stephane",age:26}
    ]
  }


switchNameHandler = (newName)=>{
  console.log('Was  cliked!');
  this.setState(
    {    persons:[
      // {name:"newName",age:33},
      {name:"steve", age:25},
      {name:"manu", age:23},
      {name:"Stephane",age:26}
    ]
  }  )
}

nameChangeHAndler = (event)=> {
    this.setState( {
      persons:[
        {name:"Max", age:25},
        {name:"manu", age:23},
        {name:"Stephane",age:26}
      ]
  }  )
}


state = {
  userName:"supermax"


usernameChangeHandler = (event)=> {this.setState({username:event.target.value});}
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput changed={this.usernameChangeHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />


        {/* <button onClick={()=>this.switchNameHandler('MAximilien!!')}> Switchname</button>
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
        
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,'MAx!')}> My hobbies = tennis </Person>
        
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} /> */}

      </div>
    );
  }
}

export default App;
