import { Component } from 'react';

import newsAPI from './services/newsApi';

import Container from './components/Container';
import QueryForm from './components/QueryForm';
import NewstView from './components/NewstView';

class App extends Component {
  state = {
    articles: [],
    query: '',
    isLoading: false,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchNews();
    }
  }
  fetchNews = () => {
    this.setState({ isLoading: true });
    newsAPI
      .fetchNews(this.state.query, this.state.currentPage)
      .then(({ data }) => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...data.articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(this.setState({ isLoading: false }));
  };

  getQuery = query => {
    this.setState({ query, currentPage: 1, articles: [] });
  };

  render() {
    return (
      <Container>
        <QueryForm getQuery={this.getQuery} />
        {this.state.articles.length > 0 && (
          <h1>Статті по запиту: {this.state.query}</h1>
        )}
        {this.state.isLoading && <h2>Loading...</h2>}
        <NewstView articles={this.state.articles} />
        {this.state.articles.length > 0 && (
          <button onClick={this.fetchNews} className="load-more">
            Загрузить еще!
          </button>
        )}
      </Container>
    );
  }
}
export default App;
