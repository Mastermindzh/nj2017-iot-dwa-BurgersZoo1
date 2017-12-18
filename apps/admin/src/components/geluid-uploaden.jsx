import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Input, {InputLabel} from "material-ui/Input";
import {FormControl} from "material-ui/Form";
import Grid from "material-ui/Grid";
import styles from "../styles/style";
import FileUpload from "material-ui-icons/FileUpload";
import Button from "material-ui/Button";
import {uploadSound} from "./../actions/uploadGeluidActions";
import {uploadWeetje} from "./../actions/weetjesActions";

class GeluidUploaden extends Component {
  state = {
    name: "",
    audioFile: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    uploadSound(this.state.name, this.state.audioFile).then(result => {
      console.log(this.props.identifier);
      console.log(result.data[0])
      this.setState({audioFile: result});//??
      //todo maak if statements
      uploadWeetje(this.state.name, result.data[0])
      //todo name refactoren naar beschrijving
      //todo scherm closen on uploadsucces?
      //todo page laten reloaden - > (automatisch ivm this.setState????
      console.log(this.props)
      this.props.onUploadSuccess();
    }).catch(err => {
      console.log('upload failed');
      console.log(err);
    });
  }

  handleAudioChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        audioFile: file
      });
    };

    if (file != undefined) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const {classes, identifier} = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl
              className={classes.formControl}
              style={{width: "100%"}}
            >
              <InputLabel htmlFor="geluid-naam">{identifier}</InputLabel>
              <Input
                id="geluid-naam"
                value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input
              style={{display: "none"}}
              accept="audio/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={e => this.handleAudioChange(e)}
            />
            <label htmlFor="icon-button-file">
              <Button
                color="default"
                className={classes.button}
                raised
                component="span"
              >
                {this.state.audioFile
                  ? this.state.audioFile.name
                  : "Selecteer uw audiobestand"}
                <FileUpload/>
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              disabled={!this.state.audioFile != ""}
              raised
              color="primary"
              type="submit"
            >
              {identifier} opslaan
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

GeluidUploaden.propTypes = {
  classes: PropTypes.object,
  identifier: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(GeluidUploaden);
