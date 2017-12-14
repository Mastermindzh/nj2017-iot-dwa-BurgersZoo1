import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";

import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";
import TextField from "material-ui/TextField";
import Speurpunt from "./../models/speurpunt";
import _ from "lodash";

import { Dropdown } from "semantic-ui-react";

class SpeurpuntBeherenPopupContainer extends Component {

  constructor(props) {
    super(props);

    let state = {
      name: "",
      verblijf: "",
      poot: [],
      id: ""
    };

    if(props.data !== undefined){
      state.name = props.data.locatienaam;
      state.verblijf = props.data.verblijfId;
      state.poot = props.data.pootid;
      state.id = props.data.id;
    }

    this.state = state;

    this.stateToSpeurpunt = this.stateToSpeurpunt.bind(this);
  }

  /**
   * change state on keypress
   * @param {input} field name of the state key to change
   * @param {*} event
   */
  handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  stateToSpeurpunt() {

    return new Speurpunt(
      this.state.poot === null ? [] : this.state.poot,
      null,
      this.state.name,
      this.state.verblijf,
      this.state.id
    );
  }

  /**
   * Add a speurpunt
   */
  addSpeurpunt() {
    this.props.addSpeurpunt(this.stateToSpeurpunt());
  }

  updateSpeurpunt() {
    this.props.updateSpeurpunt(this.stateToSpeurpunt());
  }

  handleDropDownChange(event, data) {
    this.setState({ poot: data.value });
  }

  handleVerblijfChange(event, data) {
    this.setState({ verblijf: data.value });
  }

  render() {
    const { classes, data } = this.props;

    const identifier = data === undefined ? "toevoegen" : "aanpassen";
    let buttonAction = data === undefined ? this.addSpeurpunt : this.updateSpeurpunt;


    const poten = _.map(this.props.poten, poot => {
      return { key: poot.id, text: poot.pootid, value: poot.pootid };
    });

    const verblijven = _.map(this.props.verblijven, verblijf => {
      return { key: verblijf.id, text: verblijf.naam, value: verblijf.id };
    });

    return (
      <PopupComponent
        title={`Een speurpunt ${identifier}`}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
      >
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <h3>De naam van het speurpunt:</h3>
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
            <h3>Het verblijf van het speurpunt:</h3>
            <Dropdown
              placeholder="Verblijf"
              fluid
              selection
              search
              options={verblijven}
              onChange={this.handleVerblijfChange.bind(this)}
              value={this.state.verblijf}
            />
          </Grid>
          <Grid item xs={12}>
            <h3>De poten van het speurpunt:</h3>
            <Dropdown
              placeholder="Poten"
              fluid
              multiple
              search
              selection
              options={poten}
              onChange={this.handleDropDownChange.bind(this)}
              value={this.state.poot}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              onClick={buttonAction.bind(this)}
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

SpeurpuntBeherenPopupContainer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  addSpeurpunt: PropTypes.func,
  fetchPoten: PropTypes.func,
  poten: PropTypes.object,
  fetchVerblijven: PropTypes.func,
  verblijven: PropTypes.object,
  data: PropTypes.object,
  updateSpeurpunt: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(SpeurpuntBeherenPopupContainer);
