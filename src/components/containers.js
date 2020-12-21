import React, { memo } from 'react';

const Containers = memo(({children}) => {
    return (
        <div id="app-container" className="app-container">
            {children}
        </div>
    );
});

export default Containers;