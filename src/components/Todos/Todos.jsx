import s from './Todos.module.css';
import Todo from '../Todo';
const Todos = ({
  todos,
  onClick,
  onInputChange,
  totalAmount,
  completedAmount,
}) => {
  return (
    <div className={s.section}>
      <h2 className={s.heading}>Your todos</h2>
      <p>Total amount: {totalAmount}</p>
      <p>Completed amount: {completedAmount}</p>
      <ul className={s.list}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={s.item}>
            <Todo
              text={text}
              onClick={onClick}
              id={id}
              completed={completed}
              onInputChange={onInputChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
