import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';

import DrawerComponent from './drawer-component.jsx';
import AppBarComponent from './app-bar-component.jsx';
import AppRoutes from '../routes/app-routes';

class Layout extends Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.appFrame}>
          <AppBarComponent open={open} handleToggle={this.handleToggle.bind(this)}/>
          <DrawerComponent open={open} handleToggle={this.handleToggle.bind(this)}/>

          <main
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: open,
              [classes[`contentShift-left`]]: open,
            })}
          >
            <Typography type="body1">
              <AppRoutes />
            </Typography>
          </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(style, { withTheme: true })(Layout);
