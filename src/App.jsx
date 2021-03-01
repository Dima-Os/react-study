import { useEffect, useState } from 'react';

import Container from './components/Container';
import Todos from './components/Todos';
import Editor from './components/Editor';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconBtn from './components/IconBtn';
import { ReactComponent as AddIcon } from './images/plus.svg';

import todosAPI from './services/todosAPI';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterVAlue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onClick = id => {
    console.log(id);
    todosAPI
      .deleteTodo(id)
      .then(setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)));
  };
  const onInputChange = todoId => {
    const todo = todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    todosAPI.makeCompleted(todoId, completed).then(({ data }) => {
      setTodos(prevTodos =>
        prevTodos.map(todo => {
          return todo.id === data.id ? data : todo;
        }),
      );
    });
  };

  useEffect(() => {
    todosAPI.getTodos().then(({ data }) => {
      setTodos(data);
    });
  }, []);

  const onFormSubmit = message => {
    const todo = {
      text: message,
      completed: false,
    };
    todosAPI
      .addTodo(todo)
      .then(({ data }) => {
        setTodos(prevTodos => [data, ...prevTodos]);
      })
      .then(setShowModal(false));
  };
  const getVisibleTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };
  const getCompletedTodos = () => {
    return todos.reduce((acc, el) => {
      return el.completed ? acc + 1 : acc;
    }, 0);
  };
  return (
    <>
      <Container>
        <IconBtn
          onClick={() => {
            setShowModal(true);
          }}
          aria-label="Добавить"
        >
          <AddIcon width="40" height="40" />
        </IconBtn>
        <Filter
          value={filterValue}
          onChangeHandler={e => {
            setFilterVAlue(e.currentTarget.value);
          }}
        />
        <Todos
          todos={getVisibleTodos()}
          onClick={onClick}
          onInputChange={onInputChange}
          totalAmount={todos.length}
          completedAmount={getCompletedTodos()}
        />
        {showModal && (
          <Modal
            togleModal={() => {
              setShowModal(false);
            }}
          >
            <Editor onFormSubmit={onFormSubmit} />
          </Modal>
        )}
      </Container>
    </>
  );
}
