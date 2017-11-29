import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import axios from "axios";
import TableComponent from './../components/table-component.jsx';
import Typography from 'material-ui/Typography';

class ScanPasComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      passen: []
    };
  }

  componentDidMount() {

    axios.get("http://servers.rickvanlieshout.com:8001/api/rangerHeeftBezochts").then(response => {
      this.setState({ passen: response.data.reverse() });

      setInterval( () => {
      axios.get("http://servers.rickvanlieshout.com:8001/api/rangerHeeftBezochts").then(response => {
        this.handleUpdate(response.data)
      }).catch(err => console.log(err));
    }, 1000);

    }).catch(err => console.log(err));

  }

  handleUpdate(scans){

  }

  render() {

    const headers = [
      { text: "Ranger id" },
      { text: "Speur punt id" },
      { text: "Datum"}
    ];


    let data = this.state.passen.map(pas => {
      let date = new Date(pas.datum);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      return {
        key: pas.datum,
        children:[
          {children: pas.rangerid},
          {children: pas.speurpuntid},
          {children: formattedTime}
        ]
      };
    });

    return (
      <div>
        <Paper>
          <Typography type="headline" component="h3" style={{padding: '25px'}}>
            {this.state.passen.length} gescande passen
          </Typography>
          <TableComponent headers={headers} data={data} />
        </Paper>
      </div>
    );
  }
}

export default ScanPasComponent;
