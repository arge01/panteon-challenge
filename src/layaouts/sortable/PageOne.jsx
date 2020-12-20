import React, { memo } from 'react';
import Layaut from '../../components/layaut';
import { Chart } from '../../components/charts/index';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const PageOne = memo(() => {
    return (
        <>
            <Layaut title="Top Charts">
                <Chart.TopCharts />
            </Layaut>
        </>
    )
});

export default PageOne;