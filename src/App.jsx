import { Component } from 'react';

import Container from './components/Container';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import Todos from './components/Todos';

// import colorPickerOptions from './colorPickerOptions.json'
import initialTodos from './initialTodos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    name: '',
    tag: '',
  };
  onClick = id => {
    console.log(id);
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Container>
        <form>
          <label>
            Enter your name:
            <input onChange={this.handleInputChange} name="name" type="text" />
          </label>
          <label>
            Enter your tag:
            <input onChange={this.handleInputChange} name="tag" type="text" />
          </label>
        </form>
        <Todos todos={this.state.todos} onClick={this.onClick} />
        {/* <ColorPicker options={colorPickerOptions}/>
      <Dropdown />
      <Counter initialValue={0} /> */}
      </Container>
    );
  }
}
export default App;
