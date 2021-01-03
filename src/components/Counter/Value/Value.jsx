import s from './Value.module.css';

const Value = ({ value }) => {
  return <span className={s.value}>{value}</span>;
};

export default Value;
