import React, { memo } from 'react';

const Containers = memo(({children}) => {
    return (
        <div className="app-container">
            {children}
        </div>
    );
});

export default Containers;