import { Component } from 'react';
class Form extends Component {
  state = {
    name: '',
    tag: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  clearForm = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.formSubmitHandler(this.state);
    this.clearForm();
  };

  render() {
    const { name, tag } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Enter your name:
          <input
            onChange={this.handleInputChange}
            name="name"
            type="text"
            value={name}
          />
        </label>
        <label>
          Enter your tag:
          <input
            onChange={this.handleInputChange}
            name="tag"
            type="text"
            value={tag}
          />
        </label>
        <button type="submit">Отправить!</button>
      </form>
    );
  }
}

export default Form;
