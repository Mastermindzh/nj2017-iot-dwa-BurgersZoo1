import React, { Component } from 'react';
import TableComponent from './../components/table-component.jsx'
import { withStyles } from 'material-ui/styles';
import style from '../styles/style';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

class PootAanpassenContainer extends Component {
  render() {

    const headers = [
      {text: ""},
      {text: "Poot"},
      {text: "Pootnummer", numeric: true},
      {text: "Dierengeluid"},
      {text: "Weetjes"},
    ];


    const data = [
      [
        {children: <IconButton>
              <Icon>mode_edit</Icon>
            </IconButton>},
        {children: "Poot 1", },
        {children: "1", numeric: true},
        {children: "Olifant", },
        {children: "- Een olifant heeft slechts 2 knieen"}
      ],
      [
        {children: <IconButton>
              <Icon>mode_edit</Icon>
            </IconButton>},
        {children: "Poot 2", },
        {children: "2", numeric: true},
        {children: "Leeuwen", },
        {children: "- Leeuwen zijn cool"}
      ],
    ];


    return (
      <div>

        <TableComponent headers={headers} data={data}/>
      </div>
    );
  }
}

export default withStyles(style, { withTheme: true })(PootAanpassenContainer);
