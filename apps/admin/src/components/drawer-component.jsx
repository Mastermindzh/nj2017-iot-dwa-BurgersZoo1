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

          <NavLink to={routes.admin}>
            <MenuItem value="left"><Icon>home</Icon><span className="menuText">Home</span></MenuItem>
          </NavLink>
          <NavLink to={routes.speurpunten}>
            <MenuItem value="left"><Icon>mode_edit</Icon><span className="menuText">Speurpunten beheren</span></MenuItem>
          </NavLink>
          <NavLink to={routes.geluiden}>
            <MenuItem value="left"><Icon>volume_up</Icon><span className="menuText">Geluiden beheren</span></MenuItem>
          </NavLink>
          <NavLink to={routes.weetjes}>
            <MenuItem value="left"><Icon>question_answer</Icon><span className="menuText">Weetjes beheren</span></MenuItem>
          </NavLink>
          <NavLink to={routes.scanPas}>
            <MenuItem value="left"><Icon>credit_card</Icon><span className="menuText">Pas scannen</span></MenuItem>
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
