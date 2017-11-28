import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeController from '../containers/home-container.jsx';
import PootAanpassenContainer from '../containers/poot-aanpassen.jsx';
import GeluidenBeheren from '../containers/geluiden-beheren.jsx';
import WeetjesBeheren from '../containers/weetjes-beheren.jsx';


import routes from '../constants/routes';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
        <Route path={routes.admin} component={HomeController} />
        <Route path={routes.poten} component={PootAanpassenContainer} />
        <Route path={routes.geluiden} component={GeluidenBeheren} />
        <Route path={routes.weetjes} component={WeetjesBeheren} />
      </Switch>
    );
  }
}

export default AppRoutes;
