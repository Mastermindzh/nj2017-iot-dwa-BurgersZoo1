import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import AudioList from '../shared/audio-list-component.jsx';
import AnimalResidenceSelect from './animal-residence-select.jsx';

class FactWidgetComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedResidence: {}
    };
  }

  componentWillReceiveProps(){
    this.setState({
      selectedResidence: {}
    });
  }

  renderAudioList() {
    if(this.state.selectedResidence.weetjes) {
     
      const listOfKeyValuePairs = this.state.selectedResidence.weetjes.map(weetje => {
        return {
          key: weetje.naam,
          url: `${weetje.bestandspad}`
        };
      });
  
      return (
        <AudioList
          listOfKeyValuePairs={listOfKeyValuePairs}
        />
      );
    }
  }

  onResidenceSelectHandler(residence) {
    this.setState({
      selectedResidence: residence
    });
  }

  render() {
    return (
      <div>
        <Grid item xs={12}>
          <AnimalResidenceSelect
            residences={this.props.animalResidences}
            onResidenceSelect={this.onResidenceSelectHandler.bind(this)} 
          />
        </Grid>
        {this.renderAudioList()}
      </div>
    );
  }
}

export default FactWidgetComponent;