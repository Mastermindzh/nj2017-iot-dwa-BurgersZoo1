import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'

import 'jquery'
import './style/app.scss'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import MessagesTable from './MessagesTable.js'
import NodesOnlineGraph from './NodesOnlineGraph.js'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return <div className="container">
            <NodesOnlineGraph />
            <MessagesTable />
        </div>
    }

}
let rootdiv = document.createElement("div");
document.body.appendChild(rootdiv);
ReactDOM.render( <App />, rootdiv);