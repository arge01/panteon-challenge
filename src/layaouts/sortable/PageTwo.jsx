import React, { memo } from 'react';
import Layaut from '../../components/layaut';
import { Chart } from '../../components/charts/index';

const PageTwo = memo(() => {
    return (
        <>
            <Layaut title="Traced Apps">
                <Chart.TrackedApps />
            </Layaut>
        </>
    )
});

export default PageTwo;