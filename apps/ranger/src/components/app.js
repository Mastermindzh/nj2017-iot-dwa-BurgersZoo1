import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';

import Layout from './layout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(style, { withTheme: true })(App);