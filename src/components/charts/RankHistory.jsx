import React from 'react';
import Chart from "react-apexcharts";
import { topChart as data } from "../../data/topChart"

class RankHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: data.map((val, i) => {
                return {
                    name: val.apps[i].name,
                    data: val.apps.filter((item, i) => {
                        if (i <= 6)
                            return item.rank
                    }).map(item => item.rank)
                };
            }),
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
                    categories: data.map((val) => [val.date])
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },


        };
    }
    render() {
        return (
            <div className="chart">
                {/*<Chart options={this.state.options} series={this.state.series} type="area" />*/}
            </div>
        );
    }
}

export default RankHistory;