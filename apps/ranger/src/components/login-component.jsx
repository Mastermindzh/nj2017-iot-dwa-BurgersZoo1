import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { Redirect, withRouter } from 'react-router-dom';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ''
    };
  }

  handleChange = name => event => {
    this.setState({ selectedUser: event.target.value });
    this.props.onUserSelect(event.target.value, name);
  };

  render() {
    const { classes, availableUsers, redirectToReferrer } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      );
    }

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="user-simple">Selecteer je pas: </InputLabel>
          <Select
            value={this.state.selectedUser}
            onChange={this.handleChange()}
            input={<Input id="user-simple" />}
          >
            {availableUsers && availableUsers.map(user => {
              return <MenuItem key={user.id} value={user}>{`${user.id} (pas_id: ${user.pasid})`}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

Login.propTypes = {
  availableUsers: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  redirectToReferrer: PropTypes.bool.isRequired
};

Login.defaultProps = {
  availableUsers: []
}

export default withRouter(withStyles(styles)(Login));