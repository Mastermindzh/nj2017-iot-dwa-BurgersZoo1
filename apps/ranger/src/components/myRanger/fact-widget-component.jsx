import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

class FactWidgetComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAnimalResidence: ''
    }
  };

  handleChange = name => event => {
    console.log(name, event);
  };

  render() {
    return (
      <div>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={this.state.age}
          onChange={this.handleChange('age')}
          input={<Input id="age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <ReactAudioPlayer
          src="http://www.wavsource.com/snds_2017-09-17_1751672946049674/animals/lion_growl.wav"
          controls
        />
      </div>
    );
  }
}

export default FactWidgetComponent;