import React, { Component } from 'react';

class Clock extends Component {
  state = { time: new Date() };
  id = null;
  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
  render() {
    const normalizedTime = this.state.time.toLocaleTimeString();
    return <p>{normalizedTime}</p>;
  }
}

export default Clock;
