import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import styles from '../styles/style';
import FileUpload from 'material-ui-icons/FileUpload';
import Button from 'material-ui/Button';

class GeluidUploaden extends Component {

  state = {
    name: '',
  };

  render() {

    const { classes, identifier } = this.props;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
          <FormControl className={classes.formControl} style={{width: '100%'}}>
                <InputLabel htmlFor="geluid-naam">{identifier} naam</InputLabel>
                <Input id="geluid-naam" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
              </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input style={{display: 'none'}} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <Button color="default" className={classes.button} raised component="span">
                Selecteer uw bestand
                <FileUpload  />
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} raised color="primary">
              {identifier} opslaan
            </Button>
          </Grid>
        </Grid>
    );
  }
}

GeluidUploaden.propTypes = {
  classes: PropTypes.object,
  identifier: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(GeluidUploaden);
