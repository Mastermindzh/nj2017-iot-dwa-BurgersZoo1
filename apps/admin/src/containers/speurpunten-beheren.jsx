import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Grid from "material-ui/Grid";
import _ from "lodash";
import SnackbarComponent from "./../components/snackbar-component.jsx";

import TableComponent from "./../components/table-component.jsx";

import styles from "./../styles/style.js";
import SpeurpuntBeherenPopupContainer from "./speurpunt-beheren-popup.jsx";

import { fetchSpeurpunten } from "./../actions/speurpuntenActions";

class SpeurpuntenBeherenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popupOpen: false,
      search: "",
      type: "",
      snackbar: false,
      snackbarMessage: 'Aktie voltooid.'
    };

    this.closeSnackbar.bind(this);
    this.onRequestClose.bind(this);
    this.showSnackbar.bind(this);
  }

  componentWillMount() {
    this.props.fetchSpeurpunten();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.popupOpen &&
      _.size(nextProps.speurpunten) - _.size(this.state.speurpunten) > 0
    ) {
      this.setState({
        currentObject: false,
        snackbarMessage: "Poot successvol toegevoegd."
      });
      this.onRequestClose();
      this.showSnackbar();
    }
  }

  onRequestClose() {
    this.setState({ popupOpen: false });
  }

  showSnackbar() {
    this.setState({ snackbar: true });
  }

  closeSnackbar() {
    this.setState({ snackbar: false });
  }

  render() {
    const { classes } = this.props;

    const headers = [
      { text: "" },
      { text: "ID" },
      { text: "Locatienaam" },
      { text: "Geo Locatie" }
    ];

    let results = [];

    if (this.state.search != "") {
      results = _.filter(this.props.speurpunten, obj =>
        obj.locatienaam.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
      results = this.props.speurpunten;
    }

    const data = _.map(results, speurpunt => {
      return {
        key: speurpunt.id,
        children: [
          {
            children: (
              <IconButton
                onClick={() =>
                  this.setState({
                    popupOpen: true,
                    currentObject: speurpunt,
                    snackbarMessage: "Poot successvol geupdate"
                  })
                }
              >
                <Icon>mode_edit</Icon>
              </IconButton>
            )
          },
          { children: JSON.stringify(speurpunt.pootid) },
          { children: speurpunt.locatienaam },
          { children: JSON.stringify(speurpunt.geolocation) }
        ]
      };
    });

    return (
      <div>
        <h1>Speurpunten beheren</h1>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">
                  Locatienaam zoeken
                </InputLabel>
                <Input
                  id="search-simple"
                  value={this.state.search}
                  onChange={event =>
                    this.setState({ search: event.target.value })
                  }
                />
              </FormControl>
              <IconButton
                onClick={() =>
                  this.setState({ popupOpen: true, currentObject: undefined })
                }
              >
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        {this.state.popupOpen && (
          <SpeurpuntBeherenPopupContainer
            data={this.state.currentObject}
            open={this.state.popupOpen}
            onRequestClose={this.onRequestClose.bind(this)}
          />
        )}

        <SnackbarComponent
          open={this.state.snackbar}
          close={this.closeSnackbar.bind(this)}
          duration={3000}
          message={this.state.snackbarMessage}
        />
      </div>
    );
  }
}

SpeurpuntenBeherenContainer.propTypes = {
  classes: PropTypes.object,
  speurpunten: PropTypes.object,
  fetchSpeurpunten: PropTypes.func
};

function mapStateToProps(state) {
  return {
    speurpunten: state.speurpuntReducer.speurpunten
  };
}

export default connect(mapStateToProps, { fetchSpeurpunten })(
  withStyles(styles, { withTheme: true })(SpeurpuntenBeherenContainer)
);
