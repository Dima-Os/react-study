import s from './Filter.module.css';
const Filter = ({ value, onChangeHandler }) => {
  return (
    <label className={s.filter}>
      Поиск по слову:
      <input value={value} type="text" onChange={onChangeHandler} />
    </label>
  );
};
export default Filter;
