import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './InputForm.module.css';
class InputForm extends Component {
  state = { pockemonName: '' };
  onChangeHandler = e => {
    this.setState({ pockemonName: e.currentTarget.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.pockemonName.trim() === '') {
      toast.error('Please input pockemon name!');
    }
    this.props.onFormSubmit(this.state.pockemonName.trim());
    this.setState({ pockemonName: '' });
  };
  render() {
    return (
      <div className={s.wrapper}>
        <form onSubmit={this.onFormSubmit} className={s.form}>
          <label className={s.label}>
            Please input pokemon name :
            <input
              className={s.input}
              onChange={this.onChangeHandler}
              type="text"
              value={this.state.pockemonName}
            />
          </label>
          <button type="submit" className={s.submit}>
            <FcSearch style={{ marginRight: '10' }} />
            Find {this.state.pockemonName} !!!
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
