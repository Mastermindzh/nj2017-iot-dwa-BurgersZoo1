import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioList extends Component {

  renderAudioPlayers() {
    return this.props.listOfKeyValuePairs.map(audio => {
      return (
        <div>
          <span>{audio.key}</span>
          <ReactAudioPlayer
            key={audio.key}
            src={audio.url}
            controls
          />
        </div>
      );
    })
  }

  render() {
    return (
      this.renderAudioPlayers()
    );
  }
}

export default AudioList;