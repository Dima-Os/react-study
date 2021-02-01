import { Component } from 'react';

import Container from './components/Container';
import Todos from './components/Todos';
import Editor from './components/Editor';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconBtn from './components/IconBtn';
import { ReactComponent as AddIcon } from './images/plus.svg';

import todosAPI from './services/todosAPI';

class App extends Component {
  state = {
    todos: [],
    filterValue: '',
    showModal: false,
  };

  componentDidMount() {
    todosAPI.getTodos().then(({ data }) => {
      this.setState({ todos: data });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('userTodos', JSON.stringify(this.state.todos));
    }
  }
  onClick = id => {
    todosAPI.deleteTodo(id).then(
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== id),
      })),
    );
  };

  onInputChange = todoId => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    todosAPI.makeCompleted(todoId, completed).then(({ data }) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          return todo.id === data.id ? data : todo;
        }),
      }));
    });
  };

  onFormSubmit = message => {
    const todo = {
      text: message,
      completed: false,
    };
    todosAPI
      .addTodo(todo)
      .then(({ data }) => {
        this.setState(prevState => ({ todos: [data, ...prevState.todos] }));
      })
      .then(this.togleModal());
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
          <IconBtn onClick={this.togleModal} aria-label="Добавить">
            <AddIcon width="40" height="40" />
          </IconBtn>
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
          {this.state.showModal && (
            <Modal togleModal={this.togleModal}>
              <Editor onFormSubmit={this.onFormSubmit} />
            </Modal>
          )}
        </Container>
      </>
    );
  }
}
export default App;
