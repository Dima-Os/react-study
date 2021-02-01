import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
class QueryForm extends Component {
  state = { inputValue: '' };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.getQuery(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  onChangeHandler = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmitHandler}
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'baseline',
          flexWrap: 'nowrap',
        }}
      >
        <label style={{ marginRight: 10 }}>
          Please input your request :
          <input
            onChange={this.onChangeHandler}
            type="text"
            value={this.state.inputValue}
          />
        </label>
        <button
          type="submit"
          style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'baseline',
            flexWrap: 'nowrap',
          }}
        >
          <AiOutlineSearch
            style={{
              height: 16,
            }}
          />
          Search
        </button>
      </form>
    );
  }
}

export default QueryForm;
