import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Grid from "material-ui/Grid";
import _ from "lodash";
import SnackbarComponent from "./../components/snackbar-component.jsx";
import { Header } from "semantic-ui-react";
import Button from "material-ui/Button";

import TableComponent from "./../components/table-component.jsx";

import styles from "./../styles/style.js";
import SpeurpuntBeherenPopupComponent from "./../components/popups/speurpunt-beheren-popup.jsx";
import { fetchDierengeluiden } from "./../actions/dierengeluidenActions";
import { fetchWeetjes } from "./../actions/weetjesActions.js";

import InputTextFieldComponent from "./../components/form-components/input-text-field-component.jsx";
import {
  addSpeurpunt,
  updateSpeurpunt,
  fetchSpeurpunten
} from "./../actions/speurpuntenActions";
import { fetchPoten } from "./../actions/potenActions";
import { fetchVerblijven } from "./../actions/verblijfActions";

class SpeurpuntenBeherenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popupOpen: false,
      search: "",
      type: "",
      snackbar: false,
      snackbarMessage: "Actie voltooid.",
      currentObject: undefined
    };

    this.closeSnackbar.bind(this);
    this.onRequestClose.bind(this);
    this.showSnackbar.bind(this);
  }

  componentWillMount() {
    this.props.fetchSpeurpunten();
    this.props.fetchPoten();
    this.props.fetchVerblijven();
    this.props.fetchDierengeluiden();
    this.props.fetchWeetjes();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.popupOpen &&
      _.size(nextProps.speurpunten) - _.size(this.state.speurpunten) > 0
    ) {
      this.setState({
        currentObject: undefined,
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
      { text: "Acties" },
      { text: "Locatienaam" },
      { text: "Verblijf" },
      { text: "Dierengeluid" }
    ];

    let results = [];

    if (this.state.search != "") {
      results = _.filter(this.props.speurpunten, obj =>
        obj.locatienaam.toLowerCase().includes(this.state.search.toLowerCase()) ||
        (obj.verblijf !== undefined && obj.verblijf.naam.toLowerCase().includes(this.state.search.toLowerCase()))
        ? obj : null
      );
    } else {
      results = this.props.speurpunten;
    }

    const data = mapSpeurpuntenToRows(results, speurpunt => {
      this.setState({
        popupOpen: true,
        currentObject: speurpunt,
        snackbarMessage: "Poot successvol geupdate"
      });
    });

    return (
      <div>
        <Header size="huge">Speurpunten beheren</Header>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <InputTextFieldComponent
                className={classes.formControl}
                id={"search-simple"}
                text={"zoeken op locatienaam of verblijf"}
                value={this.state.search}
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
                style={{"minWidth": "300px"}}
              />
              <Button
                className={classes.button}
                raised
                style={{"float":"right", backgroundColor: "#7ecb20", color: "white"}}
                onClick={() =>
                  this.setState({ popupOpen: true, currentObject: undefined })
                }
              >
                <Icon style={{"paddingRight": "10px"}} className={classes.rightIcon}>add_circle</Icon> Speurpunt toevoegen
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        {this.state.popupOpen && (
          <SpeurpuntBeherenPopupComponent
            data={this.state.currentObject}
            open={this.state.popupOpen}
            onRequestClose={this.onRequestClose.bind(this)}
            poten={this.props.poten}
            verblijven={this.props.verblijven}
            weetjes={this.props.weetjes}
            onSubmit={
              this.state.currentObject !== undefined
                ? this.props.updateSpeurpunt
                : this.props.addSpeurpunt
            }
            identifier={
              this.state.currentObject !== undefined ? "aanpassen" : "toevoegen"
            }
            dierengeluiden={this.props.dierengeluiden}
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

/**
 * Map speurpunten to table rows
 * @param {*} speurpunten array of speurpunten from backend
 */
function mapSpeurpuntenToRows(speurpunten, onClick) {
  return _.map(speurpunten, speurpunt => {
    return {
      key: speurpunt.id,
      children: [
        {
          children: (
            <IconButton
              onClick={() => {
                onClick(speurpunt);
              }}
            >
              <Icon>mode_edit</Icon>
            </IconButton>
          )
        },
        { children: speurpunt.locatienaam },
        {
          children:
            speurpunt.verblijf !== undefined ? speurpunt.verblijf.naam : ""
        },
        {
          children:
            speurpunt.dierengeluid !== undefined
              ? speurpunt.dierengeluid.beschrijving
              : ""
        }
      ]
    };
  });
}

SpeurpuntenBeherenContainer.propTypes = {
  classes: PropTypes.object,
  speurpunten: PropTypes.object,
  fetchSpeurpunten: PropTypes.func,
  fetchPoten: PropTypes.func,
  fetchVerblijven: PropTypes.func,
  poten: PropTypes.object,
  verblijven: PropTypes.object,
  addSpeurpunt: PropTypes.func,
  updateSpeurpunt: PropTypes.func,
  fetchDierengeluiden: PropTypes.func,
  fetchWeetjes: PropTypes.func,
  weetjes: PropTypes.any,
  dierengeluiden: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    speurpunten: state.speurpuntReducer.speurpunten,
    poten: state.potenReducer.poten,
    verblijven: state.verblijvenReducer.verblijven,
    dierengeluiden: state.dierengeluidenReducer.dierengeluiden,
    weetjes: state.weetjesReducer.weetjes

  };
}

export default connect(mapStateToProps, {
  fetchSpeurpunten,
  addSpeurpunt,
  fetchPoten,
  fetchVerblijven,
  updateSpeurpunt,
  fetchDierengeluiden,
  fetchWeetjes
})(withStyles(styles, { withTheme: true })(SpeurpuntenBeherenContainer));
