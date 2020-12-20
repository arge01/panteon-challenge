import React, { memo } from 'react';
import Layaut from '../../components/layaut';
import { Chart } from '../../components/charts/index';

const PageTheree = memo(() => {
    return (
        <>
            <Layaut title="App Suggestions">
                <Chart.AppSuggestions />
            </Layaut>
        </>
    )
});

export default PageTheree;