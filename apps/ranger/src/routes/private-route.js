import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      rest.isLoggedIn ? (
        <Component {...props} user={rest.user}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
};

export default PrivateRoute;