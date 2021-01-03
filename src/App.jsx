import Container from './components/Container';
import Counter from './components/Counter';

const App = () => {
  return (
    <Container>
      <Counter initialValue={0} />
    </Container>
  );
};
export default App;
