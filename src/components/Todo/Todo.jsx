import React from 'react';
import s from './Todo.module.css';

const Todo = ({ text, onClick, id, completed, onInputChange }) => {
  return (
    <>
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
        Выполнено
      </label>
    </>
  );
};
export default Todo;
