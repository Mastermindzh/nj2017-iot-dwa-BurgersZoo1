import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import MyRangerContainer from '../containers/myRanger-container';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <MyRangerContainer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;