import React, { Component } from "react";
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';
import styles from './../styles/style.js';
import IconButton from 'material-ui/IconButton';

class SnackbarComponent extends Component {
  render() {

    const { classes, duration, close, message, open } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={duration}
        onRequestClose={close}
        SnackbarContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

SnackbarComponent.propTypes = {
  classes: PropTypes.object,
  message: PropTypes.string.isRequired,
  close: PropTypes.func,
  open: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired
};

export default withStyles(styles, { withTheme: true })(SnackbarComponent);
