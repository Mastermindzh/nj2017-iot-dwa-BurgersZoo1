import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import FactWidgetComponent from './fact-widget-component.jsx';
import ParkOverviewComponent from './park-overview-component.jsx';
import RangerVisitDate from './ranger-visit-date-component.jsx';

class MyRangerComponent extends Component {
  render() {
    return (
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
    );
  }
}

export default MyRangerComponent;