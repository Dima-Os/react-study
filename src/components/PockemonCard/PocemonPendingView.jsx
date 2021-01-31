import { ImSpinner } from 'react-icons/im';
import pendingImage from './img/question-mark.png';
import s from './PocemonPendingView.module.css';
import PockemonDataView from './PockemonDataView';

const PocemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <>
      <h1>
        {' '}
        <ImSpinner className={s.spinner} style={{ marginRight: 10 }} />
        Loading...
      </h1>
      <PockemonDataView pockemon={pokemon} />
    </>
  );
};
export default PocemonPendingView;
