import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import FactWidgetComponent from '../components/ranger/fact-widget-component.jsx';
import ParkOverviewComponent from '../components/parkmap/park-overview-component.jsx';
import RangerVisitDate from '../components/ranger/ranger-visit-date-component.jsx';
import { fetchParkHistory } from '../actions/parkHistoryActions';

moment.locale('nl');

class MyRangerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedParkHistory: []
    };
  }

  componentDidMount() {
    this.props.fetchParkHistory();
  }

  componentWillReceiveProps(nextProps) {
    const {parkHistory} = this.props.parkHistory;
    const receivingParkHistoryForTheFirstTime = !parkHistory && nextProps.parkHistory.length > 0;
    if (receivingParkHistoryForTheFirstTime) {
      const date = convertUnixTimestampToCalendarDate(nextProps.parkHistory[0].datum);
      this.setState({
        selectedParkHistory: createHistoryPerDate(nextProps.parkHistory, date)
      });
    }
  }

  handleDateSelect(date) {
    this.setState({
      selectedParkHistory: createHistoryPerDate(this.props.parkHistory, date.value)
    });
  }

  render() {
    const {parkHistory} = this.props;
    const {selectedParkHistory} = this.state;
    console.log(selectedParkHistory)
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <RangerVisitDate
              dates={stripDatesFromParkHistory(parkHistory)}
              handleDateSelect={(event, data) => this.handleDateSelect(data)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FactWidgetComponent animalResidences={ _.uniqBy(selectedParkHistory.map(day => day.speurpunt.locatienaam), 'locatienaam' ) } />
          </Grid>
          <Grid item xs={12}>
            <ParkOverviewComponent speurpunten={selectedParkHistory.map(day => day.speurpunt)}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parkHistory: state.parkHistoryReducer.parkHistory
  };
};

const stripDatesFromParkHistory = parkHistory => {
  if(parkHistory) {
    return _.uniqBy(parkHistory.map(day => {
      const formattedDate = convertUnixTimestampToCalendarDate(day.datum);
      return {text: formattedDate, value: formattedDate};
    }), 'text');
  }
  return [];
};

const createHistoryPerDate = (parkHistory, date) => {
  const filteredHistoryWithoutDuplicates = _.uniqBy(parkHistory.filter(day => {
    if (convertUnixTimestampToCalendarDate(day.datum)  === date) {
      return day;
    }
  }),'speurpuntId');
  return filteredHistoryWithoutDuplicates;
};

const convertUnixTimestampToCalendarDate = unixTimestamp => {
  return moment.unix(unixTimestamp).format('L');
}

MyRangerContainer.propTypes = {
  fetchParkHistory: PropTypes.func.isRequired,
  parkHistory: PropTypes.array.isRequired
};

MyRangerContainer.defaultProps = {
  parkHistory: []
};

export default connect(mapStateToProps, {fetchParkHistory})(MyRangerContainer);

