import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
import InputForm from './components/InputForm';

class App extends Component {
  state = {
    pockemonName: '',
  };
  componentDidMount() {}
  onFormSubmit = name => {
    this.setState({ pockemonName: name });
  };
  render() {
    return (
      <Container>
        <InputForm onFormSubmit={this.onFormSubmit} />
        <ToastContainer />
      </Container>
    );
  }
}
export default App;
