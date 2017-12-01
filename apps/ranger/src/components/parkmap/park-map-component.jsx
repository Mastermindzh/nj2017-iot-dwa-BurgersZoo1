import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
    center: { lat: 52.009622, lng: 5.900908 },
    zoom: 17
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

export default ParkMapComponent;