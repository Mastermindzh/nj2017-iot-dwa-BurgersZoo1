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
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '50%'
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ''
    };
  }

  handleChange(event) {
    this.setState({ selectedUser: event.target.value });
    this.props.onUserSelect(event.target.value);
  }

  render() {
    const { classes, availableUsers, redirectToReferrer } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="user">Selecteer een pas</InputLabel>
          <Select
            value={this.state.selectedUser}
            onChange={this.handleChange.bind(this)}
            input={<Input id="user" />}
          >
            {availableUsers.map(user => (
              <MenuItem
                key={user.id}
                value={user}
              >
                {`${user.id} (pas_id: ${user.pasid})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
};

export default withRouter(withStyles(styles)(Login));