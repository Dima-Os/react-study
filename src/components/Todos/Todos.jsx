import s from './Todos.module.css';
const Todos = ({ todos, onClick }) => {
  return (
    <ul className={s.list}>
      {todos.map(todo => (
        <li key={todo.id} className={s.item}>
          <p className={s.text}>{todo.text}</p>
          <button type="button" onClick={() => onClick(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Todos;
