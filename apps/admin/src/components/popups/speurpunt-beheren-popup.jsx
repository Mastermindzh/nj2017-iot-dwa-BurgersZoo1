import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";

import PopupComponent from "./../popup-component.jsx";
import styles from "./../../styles/style.js";
import TextField from "material-ui/TextField";
import Speurpunt from "./../../models/speurpunt";
import _ from "lodash";

import { Dropdown } from "semantic-ui-react";

class SpeurpuntBeherenPopupComponent extends Component {

  constructor(props) {
    super(props);

    let state = {
      name: "",
      verblijf: "",
      poot: [],
      id: null,
      poten: [],
      verblijven: [],
      dierengeluid: "",
      dierengeluiden: []
    };

    if(props.data !== undefined){
      state.name = props.data.locatienaam;
      state.verblijf = props.data.verblijfId;
      state.poot = props.data.pootid;
      state.id = props.data.id;
    }

    state.poten = _.map(this.props.poten, poot => {
      return { key: poot.id, text: poot.pootid, value: poot.pootid };
    });

    state.verblijven = _.map(this.props.verblijven, verblijf => {
      return { key: verblijf.id, text: verblijf.naam, value: verblijf.id };
    });

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

  handleDropDownChange(event, data) {
    this.setState({ poot: data.value });
  }

  handleVerblijfChange(event, data) {
    this.setState({ verblijf: data.value });
  }

  render() {
    const { classes, identifier, onSubmit } = this.props;

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
              options={this.state.verblijven}
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
              options={this.state.poten}
              onChange={this.handleDropDownChange.bind(this)}
              value={this.state.poot}
            />
          </Grid>
          <Grid item xs={12}>
            <h3>Dierengeluid:</h3>
            <Dropdown
              placeholder="Dierengeluid"
              fluid
              multiple
              search
              selection
              options={this.state.dierengeluiden}
              onChange={this.handleChange.bind(this, "dierengeluid")}
              value={this.state.dierengeluiden}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              onClick={() => {onSubmit(this.stateToSpeurpunt());}}
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

SpeurpuntBeherenPopupComponent.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  poten: PropTypes.object,
  verblijven: PropTypes.object,
  data: PropTypes.object,
  identifier: PropTypes.string,
  onSubmit: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(SpeurpuntBeherenPopupComponent);
