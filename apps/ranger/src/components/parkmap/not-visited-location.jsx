import React, { Component } from 'react';
import Icon from 'material-ui/Icon';
import Chip from 'material-ui/Chip';

class NotVisitedLocation extends Component {
  state = {
    chipVisible: true
  };

  toggleChip() {
    this.setState({
      chipVisible: !this.state.chipVisible
    });
  }

  render() {
    const toggleChip = this.toggleChip.bind(this);
    return (
      <div style={{ minWidth: '200px' }}>
        {this.state.chipVisible && 
          <Chip
            style={{ backgroundColor: 'rgba(255, 0, 0, 0.4)', fontSize: '16px' }}
            label={this.props.text}
            onRequestDelete={toggleChip}
          />
        }
        <Icon onClick={toggleChip}>report_problem</Icon>
      </div>
    );
  }
}

export default NotVisitedLocation;