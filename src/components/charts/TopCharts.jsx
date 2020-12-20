import React, { memo } from 'react';
import { topChart } from '../../data/topChart';
import RankList from './RankList';

const TopCharts = memo(() => {
    return (
        <>{topChart.map((val, key) => {
            return (
                <div key={key} className="rank-list">
                    <RankList data={val.apps} />
                </div>
            )
        })}
        </>
    );
});

export default TopCharts;