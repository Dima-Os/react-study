import s from './Alert.module.css';

import PropTypes from 'prop-types';

const Alert = ({ text, type }) => {
  console.log(s);
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success', '']),
};
export default Alert;
