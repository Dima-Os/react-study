import React, { Component } from 'react';

class PockemonCard extends Component {
  state = { pockemon: null };
  componentDidMount = () => {};

  render() {
    return (
      <div className="wrapper">
        <h2 className="name">{this.state.pockemon.name}</h2>
        <img src="" alt="this.state.pockemon.name" width="300" height="300" />
      </div>
    );
  }
}

export default PockemonCard;
