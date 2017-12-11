import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import homeImage from './../images/Map_overview.png';
import Grid from 'material-ui/Grid';

class HomeContainer extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs>
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
          <img src={homeImage} style={{maxWidth: '100%', width: '100%'}} />
        </Grid>
      </Grid>
    );
  }
}

export default HomeContainer;
