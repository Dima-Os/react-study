import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

const getTodos = () => {
  return axios.get('/todos');
};
const addTodo = todo => {
  return axios.post('/todos', todo);
};
const deleteTodo = id => {
  return axios.delete(`/todos/${id}`);
};
const makeCompleted = (id, completed) => {
  return axios.patch(`/todos/${id}`, { completed: !completed });
};

export default { getTodos, addTodo, deleteTodo, makeCompleted };
