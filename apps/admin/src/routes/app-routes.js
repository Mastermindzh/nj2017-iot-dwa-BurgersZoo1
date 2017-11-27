import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyRangerContainer from '../containers/myRanger-container';
import FactContainer from '../containers/fact-container';
import SoundContainer from '../containers/sound-container';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
        <Route path="/poot-aanpassen" component={MyRangerContainer} />
        <Route path="/geluiden-beheren" component={FactContainer} />
        <Route path="/weetjes-beheren" component={SoundContainer} />
      </Switch>
    );
  }
}

export default AppRoutes;
