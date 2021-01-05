import { Component } from 'react';

import Container from './components/Container';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import Todos from './components/Todos';

// import colorPickerOptions from './colorPickerOptions.json'
import initialTodos from './initialTodos.json';

class App extends Component {
  state = { todos: initialTodos };
  onClick = id => {
    console.log(id);
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  render() {
    return (
      <Container>
        <Todos todos={this.state.todos} onClick={this.onClick} />
        {/* <ColorPicker options={colorPickerOptions}/>
      <Dropdown />
      <Counter initialValue={0} /> */}
      </Container>
    );
  }
}
export default App;
