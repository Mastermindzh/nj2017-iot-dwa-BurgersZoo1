import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DrawerComponent from './drawer-component.jsx';
import AppBarComponent from './app-bar-component.jsx';
import AppRoutes from '../routes/app-routes.jsx';

class Layout extends Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes, user } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.appFrame}>
        <AppBarComponent user={user} open={open} handleToggle={this.handleToggle.bind(this)} />
        <DrawerComponent open={open} handleToggle={this.handleToggle.bind(this)} />

        <main
          className={classNames(classes.content, classes[`content-left`], {
            [classes.contentShift]: open,
            [classes[`contentShift-left`]]: open,
          })}
        >
          <AppRoutes />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(style, { withTheme: true })(Layout);
