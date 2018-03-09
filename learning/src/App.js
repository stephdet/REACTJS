import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Radium from 'radium';
import "./Person/Person.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      {
        id: 'time1', name: 'Max',
        age: 36
      }, {
        id: 'time2', name: 'MAnu',
        age: 36
      },
      {
        id: 'time3', name: 'Stephane',
        age: 29
      }

    ],
    otherState: 'some other value',
    showPersons: false

  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked !');
    this.setState({
      persons: [
        {
          name: newName
          ,
          age: 36
        },
        {
          name: 'MAnu',
          age: 36
        },
        {
          name: 'Stephane',
          age: 29
        }
      ]
    })
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { p => { return p.id === id; } });

    const person = this.state.persons[personIndex];


    this.setState({
      persons: [
        { id: 'time1', name: 'Max', age: 36 },
        { id: 'time2', name: event.target.value, age: 36 },
        { id: 'time3', name: 'Stephane', age: 29 }
      ]
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid red',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };



    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, persons)}

            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style['hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }

    }

    const classes = [];
    if (this.state.persons.lenght <= 2) {
      classes.push('red');
    }
    if (this.state.persons.lenght <= 1) {
      classes.push('bold');
    }






    //click={this.deletePersonHandler(index)} 

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            c'est super</h1>
        </header>

        <p className="App-intro" />
        <p className={classes.join('')}> les belles images </p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

