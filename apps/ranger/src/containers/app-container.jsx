import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

import Layout from '../components/layout.jsx';
import Login from '../components/login-component.jsx';
import { login, logout, fetchUsers } from '../actions/loginActions';
import PrivateRoute from '../routes/private-route.jsx';

class App extends React.Component {

  state = {
    redirectToReferrer: false
  }

  componentWillMount() {
    if (!this.props.session.isLoggedIn) {
      this.props.fetchUsers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session.isLoggedIn) {
      this.setState({
        redirectToReferrer: true
      });
    }
    else {
      this.setState({
        redirectToReferrer: false
      });
    }
  }

  render() {
    const { pathname } = this.props.history.location;

    return (
      <div>
        {(pathname !== "/home" && pathname !== "/login") && <Redirect from="/" to="/home" /> }
        <Switch>
          <Route path="/login" render={
            () => (
              <Login
                availableUsers={this.props.session.availableUsers}
                onUserSelect={(user) => this.props.login(user)}
                redirectToReferrer={this.state.redirectToReferrer}
              />
            )}
          />
          <PrivateRoute
            path="/home"
            component={Layout}
            user={this.props.session.loggedInUser}
            isLoggedIn={this.props.session.isLoggedIn}
            logout={this.props.logout}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.sessionReducer,
    routing: state.routing
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, { login, logout, fetchUsers })(withStyles(style, { withTheme: true })(App)));