import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up';
import AvVolumeDown from 'material-ui/svg-icons/av/volume-down';
import ActionPets from 'material-ui/svg-icons/action/pets';

import routes from '../constants/routes';

const style = {
  paper: {
    position: 'absolute',
    zIndex: 1,
    margin: '16px 32px 16px 0'
  },
  leftIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  },
};

class Sidebar extends Component {

  handleListItemClick() {
    this.props.onItemClick();
  }

  render() {
    return (
      <Paper style={style.paper}>
        <Menu onClick={() => this.handleListItemClick()}>
          <NavLink to={routes.ranger}>
            <MenuItem key={routes.ranger} primaryText="Mijn ranger" leftIcon={<ActionPets style={style.leftIcon} />} />
          </NavLink>
          <NavLink to={routes.fact}>
            <MenuItem key={routes.fact} primaryText="Weetjes beluisteren" leftIcon={<AvVolumeUp style={style.leftIcon} />} />
          </NavLink>
          <NavLink to={routes.sound}> 
            <MenuItem key={routes.sound} primaryText="Dierengeluiden" leftIcon={<AvVolumeDown style={style.leftIcon} />} />
          </NavLink>
        </Menu>
      </Paper>
    );
  }
}

Sidebar.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

export default Sidebar;