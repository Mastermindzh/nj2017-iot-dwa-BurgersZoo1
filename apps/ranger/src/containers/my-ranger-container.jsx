import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FactWidgetComponent from '../components/ranger/fact-widget-component.jsx';
import ParkOverviewComponent from '../components/parkmap/park-overview-component.jsx';
import RangerVisitDate from '../components/ranger/ranger-visit-date-component.jsx';
import { fetchParkHistory } from '../actions/parkHistoryActions';

class MyRangerContainer extends Component {

  state = {
    dates: [],
    selectedVisitHistory: {}
  }

  componentWillMount() {
    this.props.fetchParkHistory();
  }

  componentDidMount() {
    this.setState({
      dates: stripDatesFromVisitHistory(this.props.parkHistory)
    });
  }

  handleDateSelect(data) {
    const date = data.value;
    this.setState({
      selectedVisitHistory: stripSingleHistoryFromProps(this.props.parkHistory, date)
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <RangerVisitDate handleDateSelect={(event, data) => this.handleDateSelect(data)} />
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

const mapStateToProps = state => {
  return {
    parkHistory: state.parkHistoryReducer
  };
}

const stripDatesFromVisitHistory = parkHistory => {
  return [];
};

const stripSingleHistoryFromProps = (parkHistory, date) => {
  return {};
};

MyRangerContainer.propTypes = {
  fetchParkHistory: PropTypes.func.isRequired,
  parkHistory: PropTypes.object
};

export default connect(mapStateToProps, {fetchParkHistory})(MyRangerContainer);

