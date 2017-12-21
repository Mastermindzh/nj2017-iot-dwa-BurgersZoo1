import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import AudioList from '../shared/audio-list-component.jsx';
import AnimalResidenceSelect from './animal-residence-select.jsx';

class FactWidgetComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animalResidences: [
        'Safari',
        'Rimba',
        'Mangrove'
      ],
      selectedResidence: ''
    };
  }

  renderAudioList() {
    if (this.state.selectedResidence === 'Safari') {
      return (
        <AudioList
          listOfKeyValuePairs={[
            { key: 'Leeuw', url: 'http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/lion_growl.wav' },
            { key: 'Olifant', url: 'http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/elephant.wav' }
          ]}
        />
      );
    }
    else if (this.state.selectedResidence === 'Rimba') {
      return (
        <AudioList
          listOfKeyValuePairs={[
            { key: 'Aap', url: 'http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/monkey1.wav' }
          ]}
        />
      );
    }
    return (
      <AudioList
        listOfKeyValuePairs={[
          { key: 'Vogels', url: 'http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/bird.wav' }
        ]}
      />
    );
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