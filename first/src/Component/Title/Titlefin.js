import React, { Component } from 'react';
import './Title.css';

class Titlefin extends Component {
    render() {
      return (
        <div className="red">
            <h1 className="App-title">{this.props.params.title}</h1>
        </div>
      );
    }
  }

export default Titlefin;