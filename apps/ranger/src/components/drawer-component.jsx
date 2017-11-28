import React, { Component } from 'react';
import style from '../styles/style';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import { MenuItem } from 'material-ui/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Icon from 'material-ui/Icon';
import { NavLink } from 'react-router-dom';
import routes from '../constants/routes';

class DrawerComponent extends Component {
  render() {
    const { classes, open, handleToggle } = this.props;
    return (
      <Drawer
        type="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <NavLink to={routes.ranger}>
            <MenuItem value="left"><Icon color="accent">pets</Icon> Mijn Ranger</MenuItem>
          </NavLink>
          <NavLink to={routes.fact}>
            <MenuItem value="left"><Icon color="accent">volume_up</Icon> Weetjes </MenuItem>
          </NavLink>
          <NavLink to={routes.sound}>
            <MenuItem value="left"><Icon color="accent">volume_down</Icon> Dierengeluiden </MenuItem>
          </NavLink>
        </div>
      </Drawer>
    );
  }
}

DrawerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default withStyles(style, { withTheme: true })(DrawerComponent);