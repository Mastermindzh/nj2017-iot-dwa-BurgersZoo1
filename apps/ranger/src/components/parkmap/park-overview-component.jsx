import React from 'react';
import PropTypes from 'prop-types';

import ParkMapComponent from './park-map-component.jsx';
import AnimalResidenceLocation from './animal-residence-location.jsx';

const ParkOverviewComponent = (props) => {
  return (
    <ParkMapComponent>
      {props.speurpunten.map(speurpunt =>
        <AnimalResidenceLocation
          key={speurpunt.id}
          lat={speurpunt.verblijf.geolocatie.lat}
          lng={speurpunt.verblijf.geolocatie.lng}
          text={speurpunt.verblijf.naam}
          speurpunt={speurpunt}
        />)}
    </ParkMapComponent>
  );
};

ParkOverviewComponent.propTypes = {
  speurpunten: PropTypes.array
};


export default ParkOverviewComponent;