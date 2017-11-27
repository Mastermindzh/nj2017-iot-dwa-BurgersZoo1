import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>value of open: {String(this.props.openState)}</p>
        <Drawer
          docked={false}
          width={300}
          open={this.props.openState}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }


  // render() {
    // return (

    //   <Drawer
    //   docked={false}
    //   width={200}
    //   open={this.state.open}
    //   onRequestChange={(open) => this.setState({open})}
    // >
    //   <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
    //   <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
    // </Drawer>

    //   // <Paper style={style.paper}>
    //   //   <Menu onClick={() => this.handleListItemClick()}>
    //   //     <NavLink to={routes.ranger}>
    //   //       <MenuItem key={routes.ranger} primaryText="Mijn ranger" leftIcon={<ActionPets style={style.leftIcon} />} />
    //   //     </NavLink>
    //   //     <NavLink to={routes.fact}>
    //   //       <MenuItem key={routes.fact} primaryText="Weetjes beluisteren" leftIcon={<AvVolumeUp style={style.leftIcon} />} />
    //   //     </NavLink>
    //   //     <NavLink to={routes.sound}>
    //   //       <MenuItem key={routes.sound} primaryText="Dierengeluiden" leftIcon={<AvVolumeDown style={style.leftIcon} />} />
    //   //     </NavLink>
    //   //   </Menu>
    //   // </Paper>
    // );
  // }
}

Sidebar.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired
};

export default Sidebar;
