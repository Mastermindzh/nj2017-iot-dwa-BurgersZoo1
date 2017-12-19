import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableComponent from './../components/table-component.jsx';
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import ReactAudioPlayer from 'react-audio-player';
import Grid from 'material-ui/Grid';
import PopupComponent from './../components/popup-component.jsx';
import GeluidUploaden from './../components/geluid-uploaden.jsx';
import _ from 'lodash';
import * as ENDPOINTS from './../constants/endpoint-constants';
import {FILEUPLOAD_ACTION_TYPES} from "../constants/actionTypes";

import {fetchWeetjes, addWeetje} from './../actions/weetjesActions';
import {uploadSound, setUploadStateEmpty} from "./../actions/uploadGeluidActions";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class WeetjesBeheren extends Component {

  state = {
    search: '',
    addOpen: false,
  };

  componentWillMount() {
    this.props.fetchWeetjes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.uploads.files && nextProps.uploads.files.files.length > this.props.uploads.files.files.length && nextProps.uploads.uploadStatus === FILEUPLOAD_ACTION_TYPES.UPLOAD_STATUS_SUCCESS) {
      this.props.addWeetje(nextProps.uploads.files.beschrijving, nextProps.uploads.files.files[0]);
      this.props.setUploadStateEmpty();
      this.setState({addOpen: false})
    }
  }

  onRequestClose(){
    this.setState({addOpen: false})

  }
  render() {

    const {classes} = this.props;

    const headers = [
      {text: "ID"},
      {text: "Beschrijving"},
      {text: "Player"},
    ];

    let results = [];

    if (this.state.search != '') {
      results = _.filter(this.props.weetjes, obj => obj.beschrijving.toLowerCase().includes(this.state.search.toLowerCase()));
    } else {
      results = this.props.weetjes;
    }

    const data = _.map(results, weetje => {
      return {
        key: weetje.id,
        children: [

          {children: weetje.id},
          {children: weetje.beschrijving},
          {
            children:
              <ReactAudioPlayer
                src={`${ENDPOINTS.BASE.GET + weetje.bestandspad}`}
                controls
              />,
            key: `${weetje.id} player`
          }
        ]
      };
    });

    return (
      <div>
        <h1>Weetjes beheren</h1>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">Zoeken</InputLabel>
                <Input id="search-simple" value={this.state.search}
                       onChange={(event) => this.setState({search: event.target.value})}/>
              </FormControl>
              <IconButton onClick={() => this.setState({addOpen: true})}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableComponent data={data} headers={headers}/>
          </Grid>
        </Grid>

        {this.props.uploads.uploadStatus === FILEUPLOAD_ACTION_TYPES.UPLOAD_STATUS_IDLE && this.state.addOpen &&
        <PopupComponent title={"Weetje toevoegen"} open={this.state.addOpen} onRequestClose={this.onRequestClose.bind(this)}>
          <GeluidUploaden
            identifier="Weetje "
            uploadSound={this.props.uploadSound}
          />
        </PopupComponent>
        }

      </div>
    );
  }
}

WeetjesBeheren.propTypes = {
  classes: PropTypes.object,
  weetjes: PropTypes.arrayOf(PropTypes.object),
  fetchWeetjes: PropTypes.func,
  addWeetje: PropTypes.func,
  uploadSound: PropTypes.func,
  setUploadStateEmpty: PropTypes.func
};


function mapStateToProps(state) {
  return {
    weetjes: state.weetjesReducer.weetjes,
    uploads: state.fileUploadReducer
  };
}

export default connect(mapStateToProps, {
  fetchWeetjes,
  addWeetje,
  uploadSound,
  setUploadStateEmpty
})(withStyles(styles, {withTheme: true})(WeetjesBeheren));


