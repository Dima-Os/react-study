import { Component } from 'react';

import newsAPI from './services/newsApi';

import Container from './components/Container';
import QueryForm from './components/QueryForm';
import NewstView from './components/NewstView';

class App extends Component {
  state = { articles: [], query: '' };

  getQuery = query => {
    this.setState({ query: query });
    newsAPI
      .fetchNews(query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };
  render() {
    return (
      <Container>
        <QueryForm getQuery={this.getQuery} />
        <NewstView articles={this.state.articles} query={this.state.query} />
        <button className="load-more">Загрузить еще!</button>
      </Container>
    );
  }
}
export default App;
