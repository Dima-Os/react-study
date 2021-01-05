import { Component } from 'react';
import s from './Counter.module.css';
import PropTypes from 'prop-types';

import Value from './Value/';
import Controls from './Controls/';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  state = { value: this.props.initialValue };
  onIncrement = () => {
    this.setState(prev => ({ value: prev.value + 1 }));
  };
  onDecrement = () => {
    this.setState(prev => ({ value: prev.value - 1 }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className={s.counter}>
        <h2 className={s.heading}>Counter</h2>
        <Value value={value} />
        <Controls
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </div>
    );
  }
}

export default Counter;
