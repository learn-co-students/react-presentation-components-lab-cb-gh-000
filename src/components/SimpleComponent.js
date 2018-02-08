// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy',
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    var mood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: mood,
    });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  };
}

export default SimpleComponent;
