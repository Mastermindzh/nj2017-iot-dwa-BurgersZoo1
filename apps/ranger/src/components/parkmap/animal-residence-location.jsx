import React from 'react';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';

const AnimalResidenceLocation = (props) => {
  return (
    <div>
      {props.text}
      <Icon color="accent">pets</Icon>
    </div>
  );
};

AnimalResidenceLocation.propTypes = {
  text: PropTypes.string,
};

export default AnimalResidenceLocation;