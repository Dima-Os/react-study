import { Component } from 'react';

import shortid from 'shortid';

import Container from './components/Container';
import Todos from './components/Todos';
import initialTodos from './initialTodos.json';
import Editor from './components/Editor';
import Filter from './components/Filter';

class App extends Component {
  state = {
    todos: initialTodos,
    filterValue: '',
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
  onFormSubmit = message => {
    const todo = {
      id: shortid.generate(),
      text: message,
      completed: false,
    };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
    console.log(message);
  };
  onChangeFilter = e => {
    this.setState({ filterValue: e.currentTarget.value });
  };
  render() {
    const totalAmount = this.state.todos.length;
    const completedAmount = this.state.todos.reduce((acc, el) => {
      return el.completed ? acc + 1 : acc;
    }, 0);
    const normalizedFilter = this.state.filterValue.toLowerCase();
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
    return (
      <Container>
        <Editor onFormSubmit={this.onFormSubmit} />
        <Filter
          value={this.state.filterValue}
          onChangeHandler={this.onChangeFilter}
        />
        <Todos
          todos={visibleTodos}
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
