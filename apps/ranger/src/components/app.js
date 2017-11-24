import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import MyRangerContainer from '../containers/myRanger-container';

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
};

class App extends React.Component {
  render() {
    return (
      <div style={styles.appContainer}>
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