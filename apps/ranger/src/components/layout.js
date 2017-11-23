import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Sidebar from './sidebar';


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisible: false
    };
  }

  toggleSidebar() {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Ranger paneel"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.toggleSidebar()}
        />
        {this.state.sidebarVisible && <Sidebar onItemClick={this.toggleSidebar.bind(this)} />}
      </div>
    );
  }
}

export default Layout;