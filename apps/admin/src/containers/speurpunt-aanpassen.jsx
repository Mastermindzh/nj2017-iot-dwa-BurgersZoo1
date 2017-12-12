import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";

class SpeurpuntAanpassenContainer extends Component {
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
        title={"Een speurpunt aanpassen"}
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
                <MenuItem value={10}>Apenverblijf</MenuItem>
                <MenuItem value={20}>Olifantenverblijf</MenuItem>
                <MenuItem value={30}>De maki's</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ minWidth: "200px" }}
            >
              <InputLabel htmlFor="poot">Poten</InputLabel>
              <Select
                value={this.state.poot}
                onChange={this.handleChange.bind(this, "poot")}
                input={<Input name="poot" id="poot" />}
                fullWidth
              >
                <MenuItem value={10}>Poot nummer 1</MenuItem>
                <MenuItem value={20}>Poot nummer 2</MenuItem>
                <MenuItem value={30}>Poot nummer 3</MenuItem>
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

SpeurpuntAanpassenContainer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(SpeurpuntAanpassenContainer);
