import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';
const getTodos = () => {
  return axios.get('/todos');
};
const addTodo = todo => {
  return axios.post('/todos', todo);
};

const todosAPI = { getTodos, addTodo };
export default todosAPI;
