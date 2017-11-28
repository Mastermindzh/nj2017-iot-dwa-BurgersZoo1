import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

class PopupComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  handleClose() {
    this.props.onRequestClose();
    this.setState({ open: false });
  }

  render() {
    const { children, title } = this.props;

    return (
      <Dialog open={this.state.open} onRequestClose={() => this.handleClose()}>
        <IconButton style={{ color: 'red', position: 'absolute', right: 0 }} onClick={() => this.handleClose()}>
          <Icon>close</Icon>
        </IconButton>
        <DialogTitle style={{ padding: '30px' }}>{title}</DialogTitle>
        {children}
      </Dialog>
    );
  }
}

PopupComponent.propTypes = {
  onRequestClose: PropTypes.func,
  children: PropTypes.object,
  title: PropTypes.string,
  open: PropTypes.bool
};

export default PopupComponent;
