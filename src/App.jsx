import { Component } from 'react';

import Container from './components/Container';
import Todos from './components/Todos';
import initialTodos from './initialTodos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };
  onClick = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  onInputChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  };
  render() {
    const totalAmount = this.state.todos.length;

    const completedAmount = this.state.todos.reduce((acc, el) => {
      return el.completed ? acc + 1 : acc;
    }, 0);

    return (
      <Container>
        <Todos
          todos={this.state.todos}
          onClick={this.onClick}
          onInputChange={this.onInputChange}
          totalAmount={totalAmount}
          completedAmount={completedAmount}
        />
      </Container>
    );
  }
}
export default App;
