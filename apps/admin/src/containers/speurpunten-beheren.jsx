import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

import TableComponent from './../components/table-component.jsx';

import styles from './../styles/style.js';
import SpeurpuntToevoegenContainer from './speurpunt-toevoegen.jsx';
import SpeurpuntAanpassenContainer from './speurpunt-aanpassen.jsx';

import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';

import { fetchSpeurpunten } from './../actions/speurpuntenActions';

class SpeurpuntenBeherenContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      popupOpen: false,
      search: '',
      type: ''
    };

    this.ADD = 'ADD';
    this.EDIT= 'EDIT';
  }

  componentWillMount(){
    this.props.fetchSpeurpunten();
  }

  onRequestClose(){
    this.setState({ popupOpen: false })
  }

  componentWillReceiveProps(nextProps){
    if(this.state.popupOpen && ((_.size(nextProps.speurpunten) - _.size(this.state.speurpunten)) > 0)){
      console.log('nextprops');
      this.onRequestClose();
      this.showSnackBar();
    }
  }

  showSnackBar(){
    this.setState({snackbar: true});
  }

  snackbarClose(){
    this.setState({snackbar: false});
  }

  render() {

    const { classes } = this.props;

    const headers = [
      { text: "" },
      { text: "ID"},
      { text: "Locatienaam" },
      { text: "Geo Locatie" },
    ];

    let results = [];

    if(this.state.search != ''){
      results = _.filter(this.props.speurpunten, obj => obj.locatienaam.toLowerCase().includes(this.state.search.toLowerCase()));
    }else{
      results = this.props.speurpunten;
    }

    const data = _.map(results, speurpunt => {
      return {
        key: speurpunt.id,
        children: [
          {
            children: <IconButton onClick={() => this.setState({ popupOpen: true, type: this.EDIT })}>
              <Icon>mode_edit</Icon>
            </IconButton>
          },
          { children: speurpunt.pootid },
          { children: speurpunt.locatienaam },
          { children: JSON.stringify(speurpunt.geolocation) },
        ]
      };
    });

    return (
      <div>
        <h1>Speurpunten beheren</h1>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">Locatienaam zoeken</InputLabel>
                <Input id="search-simple" value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
              </FormControl>
              <IconButton onClick={() => this.setState({ popupOpen: true, type: this.ADD })}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
          <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        { this.state.type === this.ADD && this.state.popupOpen &&
          <SpeurpuntToevoegenContainer open={this.state.popupOpen} onRequestClose={this.onRequestClose.bind(this)}/>
        }

        { this.state.type === this.EDIT && this.state.popupOpen &&
          <SpeurpuntAanpassenContainer open={this.state.popupOpen} onRequestClose={this.onRequestClose.bind(this)}/>
        }

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbar}
          autoHideDuration={2000}
          onRequestClose={this.snackbarClose.bind(this)}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Actie verwerkt</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.snackbarClose.bind(this)}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

      </div>
    );
  }
}

SpeurpuntenBeherenContainer.propTypes = {
  classes: PropTypes.object,
  speurpunten: PropTypes.object,
  fetchSpeurpunten: PropTypes.func
};

function mapStateToProps(state){
  return {
    speurpunten: state.speurpuntReducer.speurpunten
  };
}

export default connect(mapStateToProps,{fetchSpeurpunten})(withStyles(styles, { withTheme: true })(SpeurpuntenBeherenContainer));
