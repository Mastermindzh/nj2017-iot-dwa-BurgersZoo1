import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const dates = [
  {
    text: '05-12-2017',
    value: 'someunixTimestamp'
  },
  {
    text: '12-11-2017',
    value: 'someunixTimestamp2'
  }
];

const RangerVisitDate = (props) => {
  return (
      <div>
        <h2>Jouw ranger points van je bezoek op: <span><Dropdown onChange={props.handleDateSelect} inline options={dates} defaultValue={dates[0].value}/></span></h2>
      </div>
    );
};

RangerVisitDate.propTypes = {
  handleDateSelect: PropTypes.func.isRequired,
};

export default RangerVisitDate;