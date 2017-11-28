import React, { Component } from 'react';

const styles = {
  fact: {
    backgroundColor: 'red',
    width: '50%',
    height: '50%'
  }
};

class FactWidgetComponent extends Component {
  render() {
    return (
      <div style={styles.fact}>
        <h2> FactWidgetComponent </h2>
      </div>
    );
  }
}

export default FactWidgetComponent;