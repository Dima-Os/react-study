import React, { Component } from 'react';
import PockemonPendingView from './PocemonPendingView';
import PockemonDataView from './PockemonDataView';
import PockemonErrorView from './PockemonErrorView';
import pockemonAPI from './pockemonAPI';
import PockemonIdleView from './PockemonIdleView';
class PockemonCard extends Component {
  state = {
    pockemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate = prevProps => {
    if (prevProps.pockemonName !== this.props.pockemonName) {
      this.setState({ status: 'pending' });
      pockemonAPI(this.props.pockemonName)
        .then(pockemon => {
          this.setState({ pockemon, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };
  render() {
    const { pockemon, error, status } = this.state;
    // const { pockemonName } = this.props;
    if (status === 'idle') return <PockemonIdleView />;
    if (status === 'pending') return <PockemonPendingView />;
    if (status === 'rejected')
      return <PockemonErrorView message={error.message} />;
    if (status === 'resolved') return <PockemonDataView pockemon={pockemon} />;
  }
}

export default PockemonCard;
