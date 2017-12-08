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

import styles from './../styles/style.js';
import PootToevoegenContainer from './poot-toevoegen.jsx';
import PootAanpassenPopupContainer from './poot-aanpassen-popup.jsx';

import { fetchSpeurpunten } from './../actions/speurpuntenActions';

class PootAanpassenContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      popupOpen: false,
      search: '',
      type: '',
    };

    this.ADD = 'ADD';
    this.EDIT= 'EDIT';
  }

  componentWillMount(){
    this.props.fetchSpeurpunten();
  }

  onRequestClose(){
    this.setState({ popupOpen: false })
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
      results = _.filter(this.props.speurpunten, obj => obj.locatienaam.toLowerCase().startsWith(this.state.search.toLowerCase()));
    }else{
      results = this.props.speurpunten;
    }

    const data = _.map(results, speurpunt => {
      return {
        key: speurpunt.id,
        children: [
          {
            children: <IconButton onClick={() => this.setState({ popupOpen: true, type: this.EDIT })}>
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
              <IconButton onClick={() => this.setState({ popupOpen: true, type: this.ADD })}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
          <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        { this.state.type === this.ADD && this.state.popupOpen &&
          <PootToevoegenContainer open={this.state.popupOpen} onRequestClose={this.onRequestClose.bind(this)}/>
        }

        { this.state.type === this.EDIT && this.state.popupOpen &&
          <PootAanpassenPopupContainer open={this.state.popupOpen} />
        }
      </div>
    );
  }
}

PootAanpassenContainer.propTypes = {
  classes: PropTypes.object,
  speurpunten: PropTypes.any
};

function mapStateToProps(state){
  return {
    speurpunten: state.speurpuntReducer.speurpunten
  };
}

export default connect(mapStateToProps,{fetchSpeurpunten})(withStyles(styles, { withTheme: true })(PootAanpassenContainer));
