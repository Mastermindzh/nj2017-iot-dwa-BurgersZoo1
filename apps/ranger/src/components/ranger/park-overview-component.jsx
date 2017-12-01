import React from 'react';

import ParkMapComponent from '../parkmap/park-map-component';
import AnimalResidenceLocation from '../parkmap/animal-residence-location';
import NotVisitedLocation from '../parkmap/not-visited-location';

const ParkOverviewComponent = (props) => {
  return (
    <ParkMapComponent>
      <AnimalResidenceLocation
        lat={52.012633}
        lng={5.899803}
        text={'Leeuwen'}
      />
      <AnimalResidenceLocation
        lat={52.008136}
        lng={5.899099}
        text={'Olifanten'}
      />
      <AnimalResidenceLocation
        lat={52.009311}
        lng={5.901423}
        text={'Apen'}
      />
      <AnimalResidenceLocation
        lat={52.008037}
        lng={5.903515}
        text={'Vogels'}
      />
      <NotVisitedLocation
        lat={52.008307}
        lng={5.900270}
        text={'Je bent nog niet in de dessert geweest!'}
      />
    </ParkMapComponent>
  );
}

export default ParkOverviewComponent;