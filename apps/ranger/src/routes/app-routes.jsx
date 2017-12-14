import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MyRangerContainer from '../containers/myRanger-container.jsx';
import FactContainer from '../containers/fact-container.jsx';
import SoundContainer from '../containers/sound-container.jsx';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={MyRangerContainer} />
        <Route path="/fact" component={FactContainer} />
        <Route path="/sound" component={SoundContainer} />
      </Switch>
    );
  }
}

export default AppRoutes;