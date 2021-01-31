import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
import InputForm from './components/InputForm';
import PockemonCard from './components/PockemonCard';

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
        <PockemonCard pockemonName={this.state.pockemonName} />
        <ToastContainer />
      </Container>
    );
  }
}
export default App;
