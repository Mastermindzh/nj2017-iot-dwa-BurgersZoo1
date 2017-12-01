import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import FactWidgetComponent from './fact-widget-component';
import ParkOverviewComponent from './park-overview-component';
import RangerVisitDate from './ranger-visit-date-component';

class MyRangerComponent extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <RangerVisitDate />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FactWidgetComponent />
          </Grid>
          <Grid item xs={12}>
            <ParkOverviewComponent />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyRangerComponent;