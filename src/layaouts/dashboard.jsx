import React, { memo } from 'react';
import {Chart} from '../components/charts/index';
import Containers from '../components/containers';
import Header from '../components/header';
import Layaut from '../components/layaut';
import LeftBar from '../components/leftbar';

const Dashboard = memo(() => {
    return (
        <>
            <Header title={"Dashboard"}/>
            <LeftBar/>
            <Containers>
                <Layaut title="Top Charts">
                    <Chart.TopCharts/>
                </Layaut>
                <Layaut title="Traced Apps">
                    <Chart.TrackedApps/>
                </Layaut>
                <Layaut title="App Suggestions">
                    <Chart.AppSuggestions/>
                </Layaut>
                <Layaut title="Rank History">
                    <Chart.RankHistory/>
                </Layaut>
            </Containers>
        </>
    );
});

export default Dashboard;