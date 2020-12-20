import React, { memo } from 'react';
import { appSuggestions } from '../../data/appSuggestions';
import RankList from './RankList';

const AppSuggestions = memo(() => {
    return (
        <div className="rank-list">
            <RankList data={appSuggestions}/>
        </div>
    );
});

export default AppSuggestions;