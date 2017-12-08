import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

import TableComponent from './../components/table-component.jsx';
import PopupComponent from './../components/popup-component.jsx';
import styles from './../styles/style.js';

import { fetchSpeurpunten } from './../actions/speurpuntenActions';

class PootAanpassenContainer extends Component {
  state = {
    popupOpen: false,
    search: ''
  }

  componentWillMount(){
    this.props.fetchSpeurpunten();
  }

  render() {

    const { classes } = this.props;

    const headers = [
      { text: "" },
      { text: "ID"},
      { text: "Locatienaam" },
      { text: "Geo Locatie" },
    ];

    let results = [];

    if(this.state.search != ''){
      results = _.filter(this.props.speurpunten, obj => obj.locatienaam.toLowerCase().includes(this.state.search.toLowerCase()));
    }else{
      results = this.props.speurpunten;
    }

    const data = _.map(results, speurpunt => {
      return {
        key: speurpunt.id,
        children: [
          {
            children: <IconButton onClick={() => this.setState({ popupOpen: true })}>
              <Icon>mode_edit</Icon>
            </IconButton>
          },
          { children: speurpunt.pootid },
          { children: speurpunt.locatienaam },
          { children: JSON.stringify(speurpunt.geolocation) },
        ]
      };
    });

    return (
      <div>
        <h1>Poot aanpassen</h1>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">Zoeken</InputLabel>
                <Input id="search-simple" value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
              </FormControl>
              <IconButton onClick={() => this.setState({ popupOpen: true })}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
          <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        {this.state.popupOpen &&
          <PopupComponent title={"Nog niet geimplementeerd"} open={this.state.popupOpen} onRequestClose={() => this.setState({ popupOpen: false })}>
            Tot de volgende keer!
          </PopupComponent>
        }

      </div>
    );
  }
}

PootAanpassenContainer.propTypes = {
  classes: PropTypes.object,
  speurpunten: PropTypes.arrayOf.object,
  fetchSpeurpunten: PropTypes.func
};

function mapStateToProps(state){
  return {
    speurpunten: state.speurpuntReducer.speurpunten
  };
}

export default connect(mapStateToProps,{fetchSpeurpunten})(withStyles(styles, { withTheme: true })(PootAanpassenContainer));
