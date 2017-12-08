import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableComponent from './../components/table-component.jsx';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import ReactAudioPlayer from 'react-audio-player';
import Grid from 'material-ui/Grid';
import PopupComponent from './../components/popup-component.jsx';
import GeluidUploaden from './../components/geluid-uploaden.jsx';
import styles from './../styles/style';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchDierengeluiden } from './../actions/dierengeluidenActions';

class GeluidenBeheren extends Component {

  state = {
    search: '',
    addOpen: false,
  };

  componentWillMount() {
    this.props.fetchDierengeluiden();
  }

  render() {

    const { classes } = this.props;

    const headers = [
      { text: "ID" },
      { text: "Beschrijving" },
      { text: "Geluid" },
    ];

    let results = [];

    if (this.state.search != '') {
      results = _.filter(this.props.dierengeluiden, obj => obj.beschrijving.toLowerCase().includes(this.state.search.toLowerCase()));
    } else {
      results = this.props.dierengeluiden;
    }

    const data = _.map(results, dierengeluid => {
      return {
        key: dierengeluid.id,
        children: [
          { children: dierengeluid.id },
          { children: dierengeluid.beschrijving },
          {
            children:
            <ReactAudioPlayer
              src={dierengeluid.bestandspad}
              controls
            />,
            key: `${dierengeluid.id} player`
          }
        ]
      };
    });

    return (
      <div>
        <h1>Geluiden beheren</h1>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">Zoeken</InputLabel>
                <Input id="search-simple" value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
              </FormControl>
              <IconButton onClick={() => this.setState({ addOpen: true })}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableComponent data={data} headers={headers} />
          </Grid>
        </Grid>

        {this.state.addOpen &&
          <PopupComponent title={"Geluid toevoegen"} open={this.state.addOpen} onRequestClose={() => this.setState({ addOpen: false })}>
            <GeluidUploaden identifier="Geluid " />
          </PopupComponent>
        }
      </div>
    );
  }
}

GeluidenBeheren.propTypes = {
  classes: PropTypes.object,
  dierengeluiden: PropTypes.any,
  fetchDierengeluiden: PropTypes.func
};

function mapStateToProps(state) {
  return {
    dierengeluiden: state.dierengeluidenReducer.dierengeluiden
  };
}

export default connect(mapStateToProps, { fetchDierengeluiden })(withStyles(styles, { withTheme: true })(GeluidenBeheren));
