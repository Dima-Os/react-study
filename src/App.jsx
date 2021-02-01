import { Component } from 'react';

import Container from './components/Container';
import QueryForm from './components/QueryForm';

class App extends Component {
  state = {};
  getQuery = query => {
    // отут зробити запрос
    this.setState({ query: query });
  };
  render() {
    return (
      <Container>
        <QueryForm getQuery={this.getQuery} />
      </Container>
    );
  }
}
export default App;
