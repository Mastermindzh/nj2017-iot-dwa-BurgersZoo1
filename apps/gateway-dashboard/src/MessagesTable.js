import React from 'react';
import Axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class MessagesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            itemsAmount: 0,
            currentPageIndex: 1,
            pageSize: 20,
            filterText: "%",
            sortName: 'millitimestamp',
            sortOrder: 'desc'
        };
    }

    componentDidMount() {
        this.load();
    }

    load(pageSize = this.state.pageSize,
         currentPageIndex = this.state.currentPageIndex,
         filter = this.state.filterText,
         sortName = this.state.sortName,
         sortOrder = this.state.sortOrder) {
        Axios.get('http://192.168.43.75:8080/messages' +
            '?search=' + encodeURI(filter) +
            '&page=' + (currentPageIndex - 1) +
            '&size=' + pageSize +
            '&sort=' + sortName + ',' + sortOrder)
            .then((result) => {
                console.log(result.data.map((e) => {e.timestamp = e._id.timestamp; return e;}));
                this.setState({
                    data: result.data.map((e) => {e.timestamp = e._id.timestamp; return e;}),
                    itemsAmount: 500,
                    pageSize: 50,
                    currentPageIndex: 1,
                    filterText: filter,
                    sortName: sortName,
                    sortOrder: sortOrder,
                });
            })
    }

    millisformatter(cell){
        return <span title={cell}>{new Date(cell*1000).toLocaleString()}</span>
    }

    render() {
        return (
            <div className="row">
                <div className="well">
                    {this.renderTable()}
                </div>
            </div>
        )
    }

    renderTable() {
        let options = {
            currentPageIndex: this.state.currentPageIndex,
            sizePerPage: this.state.pageSize,
            sizePerPageList: [10, 20, 50, 100, 200],
            clearSearch: true,
            searchDelayTime: 500,
            defaultSortName: this.state.sortName,
            defaultSortOrder: this.state.sortOrder,
            searchPlaceholder: 'Search in message string',
            onPageChange: (pageIndex, pageSize) => this.load(pageSize, pageIndex),
            onSizePerPageList: (pageSize) => this.load(pageSize),
            onSearchChange: (filterText) => this.load(undefined, undefined, filterText === "" ? '%' : filterText),
            onSortChange: (sortName, sortOrder) => this.load(undefined, undefined, undefined, sortName, sortOrder),
            btnGroup: () => {return <h3>Latest received messages on gateway</h3>}
        };
        return (
            <BootstrapTable data={this.state.data} remote pagination search multiColumnSearch alwaysShowAllBtns
                            fetchInfo={{dataTotalSize: this.state.itemsAmount}}
                            options={options}
                            bordered={false}
                            condensed={true}>
                <TableHeaderColumn width='150' dataSort dataField='timestamp' isKey dataFormat={ this.millisformatter }>Timestamp</TableHeaderColumn>
                <TableHeaderColumn width='75' dataSort dataField='nodeId'>Node</TableHeaderColumn>
                <TableHeaderColumn width='75' dataSort dataField='childSensorId'>Sensor</TableHeaderColumn>
                <TableHeaderColumn width='100' dataSort dataField='command'>Command</TableHeaderColumn>
                <TableHeaderColumn dataSort dataField='payload'>Payload</TableHeaderColumn>
                {/*<TableHeaderColumn dataSort dataField='title'>Title</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataSort dataField='url'>URL</TableHeaderColumn>*/}
            </BootstrapTable>
        )
    }
}