import React from 'react';
import Icon from 'material-ui/Icon';

const AnimalResidenceLocation = (props) => {
  return (
    <div>
      {props.text}
      <Icon color="accent">pets</Icon>
    </div>
  )
}

export default AnimalResidenceLocation;