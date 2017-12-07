import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import _ from 'lodash';
import PopupComponent from './../components/popup-component.jsx';
import styles from './../styles/style.js';


class PootAanpassenContainer extends Component {

  state = {
    name: '',
  };

  render() {

    const { classes } = this.props;

    return (
        <PopupComponent title={"Een poot Aanpassen"} open={this.props.open} onRequestClose={() => this.setState({ popupOpen: false })}>
              Aanpassen :D
        </PopupComponent>
    );
  }
}

PootAanpassenContainer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PootAanpassenContainer);
