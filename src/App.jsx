import Container from './components/Container';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import Colorpicker from './components/ColorPicker';

const App = () => {
  return (
    <Container>
      <Dropdown />
      <Counter initialValue={0} />
    </Container>
  );
};
export default App;
