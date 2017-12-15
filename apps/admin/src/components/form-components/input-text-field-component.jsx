import React, { Component } from 'react';
import PropTypes from "prop-types";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

class InputTextFieldComponent extends Component {
  render() {
    return (
      <FormControl className={this.props.className}>
        <InputLabel htmlFor={this.props.id}>
          {this.props.text}
        </InputLabel>
        <Input
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </FormControl>
    );
  }
}

InputTextFieldComponent.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

export default InputTextFieldComponent;
