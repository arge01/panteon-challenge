import React, { memo } from 'react';
import Layaut from '../../components/layaut';
import { Chart } from '../../components/charts/index';

const PageFour = memo(() => {
    return (
        <>
            <Layaut title="Rank History">
                <Chart.RankHistory />
            </Layaut>
        </>
    );
});

export default PageFour;