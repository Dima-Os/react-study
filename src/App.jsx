import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert';
import Container from './components/Container';
import colorPickerOptions from './colorPickerOptions.json';

const App = () => {
  return (
    <Container>
      <Alert text="Error" type="error" />
      <Alert text="Warning" type="warning" />
      <Alert text="Success" type="success" />
      <ColorPicker options={colorPickerOptions} />
    </Container>
  );
};
export default App;
