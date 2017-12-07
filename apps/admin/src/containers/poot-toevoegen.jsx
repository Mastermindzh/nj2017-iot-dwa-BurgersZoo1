import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Grid from 'material-ui/Grid';
import FileUpload from 'material-ui-icons/FileUpload';
import Button from 'material-ui/Button';
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import _ from "lodash";
import PopupComponent from "./../components/popup-component.jsx";
import styles from "./../styles/style.js";

class PootToevoegenContainer extends Component {
  state = {
    name: ""
  };

  // {
  //   "pootid": [
  //     0
  //   ],
  //   "geolocation": {
  //     "lat": 0,
  //     "lng": 0
  //   },
  //   "locatienaam": "string"
  // }

  render() {
    const { classes } = this.props;

    return (
      <PopupComponent
        title={"Een poot toevoegen"}
        open={this.props.open}
        onRequestClose={() => this.setState({ popupOpen: false })}
      >
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel htmlFor="geluid-naam"></InputLabel>
              <Input
                id="geluid-naam"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input
              style={{ display: "none" }}
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <Button
                color="default"
                className={classes.button}
                raised
                component="span"
              >
                Selecteer uw bestand
                <FileUpload />
              </Button>
            </label>
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
  open: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PootToevoegenContainer);
