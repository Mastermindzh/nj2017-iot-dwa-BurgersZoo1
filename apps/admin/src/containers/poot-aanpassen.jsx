import React, { Component } from 'react';
import TableComponent from './../components/table-component.jsx';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import PopupComponent from './../components/popup-component.jsx';
import styles from './../styles/style.js';


class PootAanpassenContainer extends Component {

  state = {
    popupOpen: false
  }

  render() {


    const { classes } = this.props;

    const headers = [
      { text: "" },
      { text: "Poot" },
      { text: "Pootnummer", numeric: true },
      { text: "Dierengeluid" },
      { text: "Weetjes" },
    ];

    const data = [
      {
        key: 'olifantrow',
        children: [
          {
            children: <IconButton onClick={() => this.setState({ popupOpen: true })}>
              <Icon>mode_edit</Icon>
            </IconButton>
          },
          { children: "Poot 1", },
          { children: "1", numeric: true },
          { children: "Olifant", },
          { children: "- Een olifant heeft slechts 2 knieen" }
        ]
      },
      {
        key: 'lion row',
        children: [
          {
            children: <IconButton onClick={() => this.setState({ popupOpen: true })}>
              <Icon>mode_edit</Icon>
            </IconButton>
          },
          { children: "Poot 2", },
          { children: "2", numeric: true },
          { children: "Leeuwen", },
          { children: "- Leeuwen zijn cool" }
        ]
      },
    ];

    return (
      <div>
        <h1>Poot aanpassen</h1>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search-simple">Zoeken</InputLabel>
                <Input id="search-simple" value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
              </FormControl>
              <IconButton onClick={() => this.setState({ popupOpen: true })}>
                <Icon>add_circle</Icon>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12}>
          <TableComponent headers={headers} data={data} />
          </Grid>
        </Grid>

        {this.state.popupOpen &&
          <PopupComponent title={"Nog niet geimplementeerd"} open={this.state.popupOpen} onRequestClose={() => this.setState({ popupOpen: false })}>
            Tot de volgende keer!
          </PopupComponent>
        }

        {/* <PopupComponent /> */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PootAanpassenContainer);
