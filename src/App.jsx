import { Component } from 'react';

import shortid from 'shortid';

import Container from './components/Container';
import Todos from './components/Todos';
import Editor from './components/Editor';
import Filter from './components/Filter';
import Modal from './components/Modal';
import Clock from './components/Clock';
class App extends Component {
  state = {
    todos: [],
    filterValue: '',
    showModal: false,
  };

  componentDidMount() {
    const localTodos = JSON.parse(localStorage.getItem('userTodos'));
    if (localTodos) {
      this.setState({ todos: localTodos });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('userTodos', JSON.stringify(this.state.todos));
    }
  }

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
  };

  onChangeFilter = e => {
    this.setState({ filterValue: e.currentTarget.value });
  };

  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
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
      <>
        <Container>
          {this.state.showModal && <Clock />}
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
          <button type="button" onClick={this.togleModal}>
            Open modal
          </button>
          {this.state.showModal && (
            <Modal togleModal={this.togleModal}>
              <h1>Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                vero ipsum nisi necessitatibus voluptatem, nemo officia officiis
                provident libero pariatur cumque. Odio placeat autem aliquid,
                maiores quibusdam ipsum! Eaque, itaque?
              </p>
            </Modal>
          )}
        </Container>
      </>
    );
  }
}
export default App;
