import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";
import { connect } from 'react-redux';

import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";
import TextField from "material-ui/TextField";
import Speurpunt from "./../models/speurpunt";
import { addSpeurpunt } from "./../actions/speurpuntenActions";
import { fetchPoten } from './../actions/potenActions';
import { fetchVerblijven } from './../actions/verblijfActions';
import _ from 'lodash';

import { Dropdown } from 'semantic-ui-react';


class SpeurpuntToevoegenContainer extends Component {

  state = {
    name: "",
    verblijf: "",
    poot: ""
  };


  componentWillMount(){
    this.props.fetchPoten();
    this.props.fetchVerblijven();
  }

  /**
   * change state on keypress
   * @param {input} field name of the state key to change
   * @param {*} event
   */
  handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  /**
   * Add a speurpunt
   */
  addSpeurpunt() {
    let ding = new Speurpunt(
      this.state.poot,
      null,
      this.state.name,
      this.state.verblijf
    );

    this.props.addSpeurpunt(ding);
  }

  handleDropDownChange(event, data){
    this.setState({poot: data.value});
  }

  render() {
    const { classes } = this.props;

    const poten = _.map(this.props.poten, poot => {
      return {key: poot.id, text: poot.pootid, value: poot.pootid};
    });

    const verblijven = _.map(this.props.verblijven, verblijf => {
      return {key: verblijf.id, text: verblijf.naam, value: verblijf.id};
    });


    return (
      <PopupComponent
        title={"Een speurpunt toevoegen"}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
      >


        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <TextField
                id="locatie-naam"
                label="Locatie"
                className={classes.textField}
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
                margin="normal"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <h3>Selecteer het gewenste verblijf:</h3>
            <Dropdown placeholder="Verblijf" fluid selection search options={verblijven} onChange={this.handleDropDownChange.bind(this)}/>
          </Grid>
          <Grid item xs={12}>
            <h3>Selecteer de gewenste poten:</h3>
            <Dropdown placeholder="Poten" fluid multiple search selection options={poten} onChange={this.handleDropDownChange.bind(this)}/>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              onClick={this.addSpeurpunt.bind(this)}
              raised
              color="primary"
            >
              opslaan
            </Button>
          </Grid>
        </Grid>
      </PopupComponent>
    );
  }
}

SpeurpuntToevoegenContainer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  addSpeurpunt: PropTypes.func,
  fetchPoten: PropTypes.func,
  poten: PropTypes.object,
  fetchVerblijven: PropTypes.func,
  verblijven: PropTypes.object
};


function mapStateToProps(state){
  return {
    poten: state.potenReducer.poten,
    verblijven: state.verblijvenReducer.verblijven
  };
}

export default connect(mapStateToProps,{addSpeurpunt, fetchPoten, fetchVerblijven})(withStyles(styles, { withTheme: true })(SpeurpuntToevoegenContainer));
