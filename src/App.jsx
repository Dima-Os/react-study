import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert';
import Container from './components/Container';
import Box from './components/Box';

import colorPickerOptions from './colorPickerOptions.json';

const App = () => {
  return (
    <Container>
      <Box type="small" styles={{ border: '2px solid #232323' }} />
      <Box type="medium" classNames="big green" />
      <Box type="large" />
      <Alert text="Error" type="error" />
      <Alert text="Warning" type="warning" />
      <Alert text="Success" type="success" />
      <ColorPicker options={colorPickerOptions} />
    </Container>
  );
};
export default App;
