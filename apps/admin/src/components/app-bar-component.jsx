import React, { Component } from 'react';
import style from '../styles/style';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';

class AppBarComponent extends Component {

  render() {

    const {classes, open, handleToggle} = this.props;

    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes[`appBarShift-left`]]: open,
        })}
      >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={handleToggle}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" noWrap>
          Admin app
        </Typography>
      </Toolbar>
    </AppBar>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default withStyles(style, { withTheme: true })(AppBarComponent);


