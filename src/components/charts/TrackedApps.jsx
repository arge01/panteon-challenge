import React, { memo } from 'react';
import { trackedApps } from '../../data/trackedApps';
import RankList from './RankList';

const TrackedApps = memo(() => {
    return (
        <div className="rank-list">
            <RankList data={trackedApps}/>
        </div>
    );
});

export default TrackedApps;