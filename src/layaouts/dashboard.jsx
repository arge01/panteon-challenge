import React, { memo, useEffect, useState } from 'react';
import Containers from '../components/containers';
import Header from '../components/header';
import LeftBar from '../components/leftbar';
import { Sortable } from '@progress/kendo-react-sortable';
import PageFour from './sortable/PageFour';
import PageTheree from './sortable/PageTheree';
import PageTwo from './sortable/PageTwo';
import PageOne from './sortable/PageOne';

const Dashboard = memo(() => {
    const [page, setPage] = useState([
        { id: 1, component: <PageOne/> },
        { id: 2, component: <PageTwo/> },
        { id: 3, component: <PageTheree/> },
        { id: 4, component: <PageFour/> },
    ]);

    const onDragOver = (event) => {
        setPage(event.newState)
    }

    const onNavigate = (event) => {
        setPage(event.newState)
    }

    const getBaseItemStyle = (isActive) => ({
        width: "50%",
        display: "inline-block",
        background: isActive ? '#ddd' : '',
        border: isActive ? 'none' : 'none',
        outline: "0"
    });

    const SortableItemUI = (props) => {
        const { isDisabled, isActive, style, attributes, dataItem, forwardRef } = props;
        const classNames = [''];

        if (isDisabled) {
            classNames.push('k-state-disabled');
        }

        return (
            <div
                ref={forwardRef}
                {...attributes}
                style={{
                    ...getBaseItemStyle(isActive),
                    ...style
                }}
                className={classNames.join(' ')}
            >
                {dataItem.component}
            </div>
        );
    };

    return (
        <>
            <Header title={"Dashboard"} />
            <LeftBar />
            <Containers>
                <Sortable
                    idField={'id'}
                    disabledField={'disabled'}
                    data={page}

                    itemUI={SortableItemUI}

                    onDragOver={onDragOver}
                    onNavigate={onNavigate}
                />
            </Containers>
        </>
    );
});

export default Dashboard;