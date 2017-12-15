import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';

class AudioList extends Component {

  renderAudioPlayers() {
    return this.props.listOfKeyValuePairs.map(audio => {
      return (
        <div key={audio.key}>
          <span>{audio.key}</span>
          <ReactAudioPlayer
            src={audio.url}
            controls
          />
        </div>
      );
    });
  }

  render() {
    return (
      this.renderAudioPlayers()
    );
  }
}

AudioList.PropTypes = {
  listOfKeyValuePairs: PropTypes.arrayOf.object
};


export default AudioList;