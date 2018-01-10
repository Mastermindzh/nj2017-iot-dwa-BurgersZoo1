import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const mapOptions = {
  scrollwheel: false,
  zoomControl: false,
  mapTypeControlOptions: {
    position: 'BOTTOM_RIGHT'     // this makes the map type control disappear
  },
  draggable: true,
  rotateControl: true,
  scaleControl: false,
  streetViewControl: false,
  panControl: false,
};

class ParkMapComponent extends Component {
  static defaultProps = {
    center: { lat: 52.008184, lng: 5.902724 },
    zoom: 18
  };

  render() {
    return (
      <div style={{ height: '70vh', width: '100%', align: 'center'}} >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDSiy-b0gELrH59rzP6mrIHWxqbw-Xyao0'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
        {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

ParkMapComponent.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.object)
};

export default ParkMapComponent;