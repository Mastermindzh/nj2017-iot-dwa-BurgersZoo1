import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";
import { connect } from "react-redux";

import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";
import TextField from "material-ui/TextField";
import Speurpunt from "./../models/speurpunt";
import { addSpeurpunt, updateSpeurpunt } from "./../actions/speurpuntenActions";
import { fetchPoten } from "./../actions/potenActions";
import { fetchVerblijven } from "./../actions/verblijfActions";
import _ from "lodash";

import { Dropdown } from "semantic-ui-react";

class SpeurpuntBeherenPopupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      verblijf: "",
      poot: []
    };

    this.stateToSpeurpunt = this.stateToSpeurpunt.bind(this);
  }

  componentWillMount() {
    this.props.fetchPoten();
    this.props.fetchVerblijven();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== undefined) {
      this.setState({
        name: nextProps.data.locatienaam,
        verblijf: nextProps.data.verblijfId,
        poot: nextProps.data.pootid
      });
    }
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
      this.props.data.id
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

function mapStateToProps(state) {
  return {
    poten: state.potenReducer.poten,
    verblijven: state.verblijvenReducer.verblijven
  };
}

export default connect(mapStateToProps, {
  addSpeurpunt,
  fetchPoten,
  fetchVerblijven,
  updateSpeurpunt
})(withStyles(styles, { withTheme: true })(SpeurpuntBeherenPopupContainer));
