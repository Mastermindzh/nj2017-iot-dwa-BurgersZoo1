import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import _ from "lodash";
import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";

class PootToevoegenContainer extends Component {
  state = {
    name: "",
    verblijf: "",
    poot: ""
  };

  /**
   * change state on keypress
   * @param {input} field name of the state key to change
   * @param {*} event
   */
  handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <PopupComponent
        title={"Een poot toevoegen"}
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
            <FormControl
              className={classes.formControl}
              style={{ minWidth: "200px" }}
            >
              <InputLabel htmlFor="verblijf">Verblijf</InputLabel>
              <Select
                value={this.state.verblijf}
                onChange={this.handleChange.bind(this, "verblijf")}
                input={<Input name="verblijf" id="verblijf" />}
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>
                  ThirtyThirtyThirtyThirtyThirtyThirtyThirtyThirty
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ minWidth: "200px" }}
            >
              <InputLabel htmlFor="poot">Poot</InputLabel>
              <Select
                value={this.state.poot}
                onChange={this.handleChange.bind(this, "poot")}
                input={<Input name="poot" id="poot" />}
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>
                  ThirtyThirtyThirtyThirtyThirtyThirtyThirtyThirty
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} raised color="primary">
              opslaan
            </Button>
          </Grid>
        </Grid>
      </PopupComponent>
    );
  }
}

PootToevoegenContainer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(PootToevoegenContainer);
