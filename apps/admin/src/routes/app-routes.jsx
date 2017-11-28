import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeController from '../containers/home-container.jsx';
import PootAanpassenContainer from '../containers/poot-aanpassen.jsx';
import FactContainer from '../containers/fact-container.jsx';
import SoundContainer from '../containers/sound-container.jsx';

import routes from '../constants/routes';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
        <Route path={routes.admin} component={HomeController} />
        <Route path={routes.poten} component={PootAanpassenContainer} />
        <Route path={routes.geluiden} component={FactContainer} />
        <Route path={routes.weetjes} component={SoundContainer} />
      </Switch>
    );
  }
}

export default AppRoutes;
