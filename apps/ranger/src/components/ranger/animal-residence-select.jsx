import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    align: 'center',
    width: '50%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AnimalResidenceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResidence: ''
    }
  }

  handleChange = name => event => {
    this.setState({ selectedResidence: event.target.value });
    this.props.onResidenceSelect(event.target.value, name);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="residence-simple">Hier ben je geweest: </InputLabel>
          <Select
            value={this.state.selectedResidence}
            onChange={this.handleChange()}
            input={<Input id="residence-simple" />}
          >
            {this.props.residences.map(residence => {
              return <MenuItem key={residence} value={residence}>{residence}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

AnimalResidenceSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onResidenceSelect: PropTypes.func.isRequired,
  residences: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(AnimalResidenceSelect);