import s from './Todos.module.css';
const Todos = ({
  todos,
  onClick,
  onInputChange,
  totalAmount,
  completedAmount,
}) => {
  return (
    <section className={s.section}>
      <h2 className={s.heading}>Your todos</h2>
      <p>Total amount: {totalAmount}</p>
      <p>Completed amount: {completedAmount}</p>
      <ul className={s.list}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>{text}</p>
            <button type="button" onClick={() => onClick(id)}>
              Delete
            </button>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                  onInputChange(id);
                }}
              />
              Виполнено
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Todos;
