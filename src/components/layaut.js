import React from 'react';

const Layaut = ({title, children}) => {
    return (
        <div className="layout">
            <div className="layout-container">
                <div className="inline">
                    <h3 className="title">{title}</h3>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layaut;