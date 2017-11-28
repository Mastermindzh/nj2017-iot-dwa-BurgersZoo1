import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import FactWidgetComponent from './fact-widget-component';
import ParkMapComponent from './park-map-component';

class MyRangerComponent extends Component {
  render() {
    return (
      <div>
        {/* <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <div>
              <h1>Jouw Ranger beleving</h1>
              <h2>Datum: 19 November 2017</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FactWidgetComponent />
          </Grid>
          <Grid item xs={12}>
            <ParkMapComponent />
          </Grid>
        </Grid> */}
      </div>
    );
  }
}

export default MyRangerComponent;