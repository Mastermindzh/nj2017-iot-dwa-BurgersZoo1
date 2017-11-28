import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyRangerContainer from '../containers/myRanger-container';
import FactContainer from '../containers/fact-container';
import SoundContainer from '../containers/sound-container';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/ranger" />} />
        <Route path="/ranger" component={MyRangerContainer} />
        <Route path="/fact" component={FactContainer} />
        <Route path="/sound" component={SoundContainer} />
      </Switch>
    );
  }
}

export default AppRoutes;