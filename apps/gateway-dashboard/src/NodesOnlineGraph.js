import React from 'react';
import Axios from 'axios'
import ReactHighcharts from 'react-highcharts';

export default class NodesOnlineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.load();
        let chart = this.chart.getChart();
        console.log(chart);
        // chart.series[0].addPoint({x: 10, y: 12});
    }

    load() {
        Axios.get('http://192.168.43.75:8080/nodes-chart')
            .then((result) => {
                this.setState({
                    data: result.data,
                });
            });
    }

    render() {
        return (
            <div className="row" style={{marginBottom: "20px"}}>
                <ReactHighcharts ref={(chart) => { this.chart = chart; }} config={{
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Aantal requests per minuut'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: null
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        crosshairs: [false, true]
                    },

                    series: [{
                        type: 'area',
                        name: 'somename',
                        data: this.state.data
                    }]
                }} />
            </div>
        )
    }


}