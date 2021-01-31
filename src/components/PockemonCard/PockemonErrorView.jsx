import errorImage from './img/error-guy.jpg';

const PockemonErrorView = ({ message }) => {
  return (
    <>
      <img src={errorImage} width="300" alt="" />
      <p>{message}</p>
    </>
  );
};
export default PockemonErrorView;
