import s from './Box.module.css';

const Box = ({ type, classNames = '', styles }) => {
  return (
    <div className={`${s[type]} ${classNames}`} style={styles}>
      Box
    </div>
  );
};
export default Box;
