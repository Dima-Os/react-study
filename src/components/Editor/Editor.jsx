import { useState } from 'react';
import s from './Editor.module.css';

export default function Ediror({ onFormSubmit }) {
  const [message, setMessage] = useState('');
  const onFormSubmitHandler = ev => {
    ev.preventDefault();
    onFormSubmit(message);
    setMessage('');
  };
  return (
    <form className={s.form} onSubmit={onFormSubmitHandler}>
      <label>
        <p>Enter your todo:</p>
        <textarea
          className={s.message}
          onChange={e => {
            setMessage(e.currentTarget.value);
          }}
          name="messa"
          value={message}
        ></textarea>
      </label>
      <button className={s.button} type="submit">
        Create
      </button>
    </form>
  );
}
