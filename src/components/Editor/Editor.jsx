import { Component } from 'react';
import s from './Editor.module.css';
class Editor extends Component {
  state = { message: '' };
  onChangeMessage = ({ currentTarget }) => {
    this.setState({ message: currentTarget.value });
  };
  onFormSubmit = ev => {
    ev.preventDefault();
    this.props.onFormSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <label>
          <p>Enter your todo:</p>
          <textarea
            className={s.message}
            onChange={this.onChangeMessage}
            name="messa"
            value={this.state.message}
          ></textarea>
        </label>
        <button className={s.button} type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Editor;
