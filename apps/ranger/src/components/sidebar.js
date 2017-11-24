import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up';
import AvVolumeDown from 'material-ui/svg-icons/av/volume-down';
import ActionPets from 'material-ui/svg-icons/action/pets';

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

const keys = {
  ranger: "ranger",
  fact: "fact",
  sound: "sound"
};

class Sidebar extends Component {

  handleListItemClick() {
    this.props.onItemClick();
  }

  render() {
    return (
      <Paper style={style.paper}>
        <Menu onItemTouchTap={(event, item) => this.handleListItemClick(item.key)}>
          <MenuItem key={keys.ranger} primaryText="Mijn ranger" leftIcon={<ActionPets style={style.leftIcon}/>} />
          <MenuItem key={keys.fact} primaryText="Weetjes beluisteren" leftIcon={<AvVolumeUp style={style.leftIcon} />} />
          <MenuItem key={keys.sound} primaryText="Dierengeluiden" leftIcon={<AvVolumeDown style={style.leftIcon} />} />
        </Menu>
      </Paper>
    );
  }
}

Sidebar.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

export default Sidebar;