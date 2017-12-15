import React, { Component } from 'react';
import style from '../styles/style';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';

class AppBarComponent extends Component {

  state = {
    anchorEl: null
  };

  handleRequestClose() {
    this.setState({ anchorEl: null });
  }

  handleMenu() {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleLogout() {
    this.props.logout();
  }



  render() {

    const { classes, open, handleToggle, user } = this.props;
    const { anchorEl } = this.state;
    const accountMenuToggle = Boolean(anchorEl);

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
            Ranger App {`${user.id} (pas_id: ${user.pasid} )`}
          </Typography>
          <div style={{justifyContent: 'flex-end'}}>
            <IconButton
              aria-owns={accountMenuToggle ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu.bind(this)}
              color="contrast"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={accountMenuToggle}
              onRequestClose={this.handleRequestClose.bind(this)}
            >
              <MenuItem onClick={this.handleLogout.bind(this)}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(style, { withTheme: true })(AppBarComponent);