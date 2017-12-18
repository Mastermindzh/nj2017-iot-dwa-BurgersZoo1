import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Label, Card, Transition } from 'semantic-ui-react';

class AnimalResidenceLocation extends Component {
  state = {
    detailsVisible: false,
    iconSize: 'big',
    iconColor: 'brown'
  };

  handleMouseEnter() {
    this.setState({
      iconSize: 'huge',
      iconColor: 'green',
      detailsVisible: true
    });
  }

  handleMouseLeave() {
    this.setState({
      iconSize: 'big',
      iconColor: 'brown',
      detailsVisible: false
    });
  }

  renderCard() {
    const {speurpunt} = this.props;
    return (
      <Transition visible={this.state.detailsVisible} animation="scale" duration={500}>
        <Card
          image="/assets/vieroogvissen.jpg"
          raised={true}
          style={{zIndex: 2}}
          header={speurpunt.verblijf.naam}
          meta={speurpunt.locatienaam}
          description={speurpunt.verblijf.beschrijving}
          onMouseEnter={this.handleMouseLeave.bind(this)}
        />
      </Transition>
    );
  }

  render() {
    return (
      <div
        style={{ minWidth: "300px" }}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <Icon
          size={this.state.iconSize}
          color={this.state.iconColor}
          name="paw"
        />
        <Label color="blue">{this.props.text}</Label>
        {this.renderCard()}
      </div>
    );
  }
}

AnimalResidenceLocation.propTypes = {
  text: PropTypes.string
};

export default AnimalResidenceLocation;