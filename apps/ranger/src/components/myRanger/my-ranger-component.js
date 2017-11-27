import React, { Component } from 'react';

import FactWidgetComponent from './fact-widget-component';
// import ParkMapComponent from './park-map-component';

class MyRangerComponent extends Component {
  render() {
    return (
        <div>
          <div>
            <h1>Jouw Ranger beleving</h1>
            <h2>Datum: 19 November 2017</h2>
          </div>
          <FactWidgetComponent />
          {/* <ParkMapComponent /> */}
        </div>        
    );
  }
}

export default MyRangerComponent;