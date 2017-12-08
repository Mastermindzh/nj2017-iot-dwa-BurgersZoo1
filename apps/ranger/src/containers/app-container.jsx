import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Layout from '../components/layout.jsx';
import Login from '../components/login-component.jsx';
import {login, fetchUsers} from '../actions/loginActions';
import PrivateRoute from '../routes/private-route';

class App extends React.Component {
  
  state = {
    redirectToReferrer: false
  }
  
  componentWillMount() {
    if(!this.props.session.isLoggedIn){
      this.props.fetchUsers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session.isLoggedIn) {
      this.setState({
        redirectToReferrer: true
      });
    }
  }
  
  render() {
    return (
      <div>
        <Redirect from="/" to="/home" />
        <Route path="/login" render={
          () => (
            <Login 
              availableUsers={this.props.session.availableUsers}
              onUserSelect={(user) => this.props.login(user)}
              redirectToReferrer={this.state.redirectToReferrer}
            />
          )}
        />
        <PrivateRoute path="/home" component={Layout} user={this.props.session.loggedInUser} isLoggedIn={this.props.session.isLoggedIn} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    session: state.sessionReducer
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, {login, fetchUsers})(withStyles(style, { withTheme: true })(App)));