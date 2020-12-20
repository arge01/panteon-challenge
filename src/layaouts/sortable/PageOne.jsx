import React, { memo } from 'react';
import Layaut from '../../components/layaut';
import { Chart } from '../../components/charts/index';

const PageOne = memo(() => {
    return (
        <Layaut title="Top Charts">
            <Chart.TopCharts />
        </Layaut>
    )
});

export default PageOne;