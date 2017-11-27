import React, { Component } from 'react';

const styles = {
  map: {
    backgroundColor: 'blue',
    width: '100%'
  }
};

class ParkMapComponent extends Component {
  render() {
    return (
      <div style={styles.map}>
        <h2> ParkMapComponent </h2>
      </div>
    );
  }
}

export default ParkMapComponent;