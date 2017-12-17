import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const RangerVisitDate = (props) => {
  return (
      <div>
        <h2>Jouw ranger points van je bezoek op: 
          <span>
            {
              props.dates.length > 0 &&
              <Dropdown 
                onChange={props.handleDateSelect}
                inline
                options={props.dates}
                defaultValue={props.dates[0].value}
              />
            }
          </span>
        </h2>
      </div>
    );
};

RangerVisitDate.propTypes = {
  handleDateSelect: PropTypes.func.isRequired,
  dates: PropTypes.array.isRequired
};

export default RangerVisitDate;