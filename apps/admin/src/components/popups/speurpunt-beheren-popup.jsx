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
      dierengeluiden: [],
      weetje: []
    };

    if(!_.isEmpty(props.data)){
      state.name = props.data.locatienaam;
      state.verblijf = props.data.verblijfId;
      state.poot = props.data.pootid;
      state.id = props.data.id;
      state.weetje = props.data.weetjes.map(weetje => {return weetje.id;});

      if(!_.isEmpty(props.data.dierengeluid)){
        state.dierengeluid = props.data.dierengeluid.id;
      }

    }

    state.poten = _.map(this.props.poten, poot => {
      return { key: poot.id, text: poot.pootid, value: poot.pootid };
    });

    state.verblijven = _.map(this.props.verblijven, verblijf => {
      return { key: verblijf.id, text: verblijf.naam, value: verblijf.id };
    });

    state.dierengeluiden = _.map(this.props.dierengeluiden, dierengeluid => {
      return { key: dierengeluid.id, text: dierengeluid.beschrijving, value: dierengeluid.id };
    });

    state.weetjes = _.map(this.props.weetjes, weetje => {
      return {key: weetje.id,text:weetje.naam, value: weetje.id};
    });

    this.state = state;

    this.stateToSpeurpunt = this.stateToSpeurpunt.bind(this);
  }

  handleDierenGeluidChange(event,data){
    this.setState({dierengeluid: data.value})
  }

  stateToSpeurpunt() {
    return new Speurpunt(
      this.state.poot === null ? [] : this.state.poot,
      null,
      this.state.name,
      this.state.verblijf,
      this.state.id,
      this.state.dierengeluid,
      this.state.weetje
    );
  }

  handleDropDownChange(event, data) {
    this.setState({ poot: data.value });
  }

  handleWeetjesDropDownChange(event, data){
     this.setState({weetje: data.value});
  }

  handleVerblijfChange(event, data) {
    this.setState({ verblijf: data.value });
  }

  render() {
    const { classes, identifier, onSubmit } = this.props;
    console.log(this.state.weetjes)
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
              <h3>De leefwereld van het speurpunt:</h3>
              <TextField
                id="locatie-naam"
                label="Leefwereld"
                className={classes.textField}
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
                margin="normal"
                placeholder="Bijv. Mangrove, Safari etc.."
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <h3>Het verblijf van het speurpunt:</h3>
            <Dropdown
              placeholder="Bijv. Wenkkrabben, Olifanten etc.."
              fluid
              selection
              search
              options={_.orderBy(this.state.verblijven, 'text', 'asc')}
              onChange={this.handleVerblijfChange.bind(this)}
              value={this.state.verblijf}
            />
          </Grid>
          <Grid item xs={12}>
            <h3>De poten van het speurpunt:</h3>
            <Dropdown
              placeholder="Selecteer 1 of meerdere..."
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
              search
              selection
              options={this.state.dierengeluiden}
              onChange={this.handleDierenGeluidChange.bind(this)}
              value={this.state.dierengeluid}
            />
          </Grid>
          <Grid item xs={12}>
            <h3>De weetjes van het speurpunt:</h3>
            <Dropdown
              placeholder="Selecteer wat wordt afgespeeld in het park..."
              fluid
              multiple
              search
              selection
              options={_.orderBy(this.state.weetjes, 'text', 'asc')}
              onChange={this.handleWeetjesDropDownChange.bind(this)}
              value={this.state.weetje}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className={classes.button}
              // onSubmit(this.stateToSpeurpunt())
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
  dierengeluiden: PropTypes.object,
  data: PropTypes.object,
  identifier: PropTypes.string,
  weetjes: PropTypes.object,
  onSubmit: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(SpeurpuntBeherenPopupComponent);
