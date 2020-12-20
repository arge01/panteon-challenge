import React from 'react';

import { topChart as data } from "../../data/topChart"

class RankHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: "",
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: "string",
                    categories: []
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },


        };
    }

    componentDidMount() {
        console.log(data.map((val) => [val.date]));
        console.log(this.state.series)
    }
    render() {
        return (
            <div className="chart">
                
            </div>
        );
    }
}

export default RankHistory;