import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FactWidgetComponent from '../components/ranger/fact-widget-component.jsx';
import ParkOverviewComponent from '../components/parkmap/park-overview-component.jsx';
import RangerVisitDate from '../components/ranger/ranger-visit-date-component.jsx';
import { fetchParkHistory } from '../actions/parkHistoryActions';

class MyRangerContainer extends Component {

  componentWillMount(){
    this.props.fetchParkHistory();
  }

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

function mapStateToProps(state){
  return {
    state: state
  };
}

MyRangerContainer.propTypes = {
  fetchParkHistory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {fetchParkHistory})(MyRangerContainer);