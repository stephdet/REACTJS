import React, { Component } from 'react';
import Titlefin from './Titlefin';
import './Title.css';




class Title extends Component {
    render(N) {
      return (
        <div className="red">
            <Titlefin params={this.props.title} />

        </div>
      );
    }
  }

export default Title;
