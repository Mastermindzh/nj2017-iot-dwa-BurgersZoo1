import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import homeImage from './../images/Map_overview.png';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <hr />
        <Typography component="p">
          Hier komt een dashboard dat ontwikkeld wordt door de andere groep. <br />
          Gebruik het menu om naar de andere pagina's te komen.
        </Typography>
        <br /><br />
        <Typography component="p">
          Een voorbeeld van het dashboard (gemaakt door groep 2)
        </Typography>
        <img src={homeImage} />
      </div>
    );
  }
}

export default HomeContainer;
