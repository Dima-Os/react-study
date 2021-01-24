import React from 'react';
import s from './Todo.module.css';
import { ReactComponent as DeleteBtn } from '../../images/delete.svg';
import IconBtn from '../IconBtn';

const Todo = ({ text, onClick, id, completed, onInputChange }) => {
  return (
    <>
      <p className={s.text}>{text}</p>
      <IconBtn onClick={() => onClick(id)} aria-label="Добавить">
        <DeleteBtn width="40" height="40" />
      </IconBtn>
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
