import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import Containers from '../components/containers';
import Header from '../components/header';
import LeftBar from '../components/leftbar';
import { Sortable } from '@progress/kendo-react-sortable';
import PageFour from './sortable/PageFour';
import PageTheree from './sortable/PageTheree';
import PageTwo from './sortable/PageTwo';
import PageOne from './sortable/PageOne';

import { Resizable, ResizableBox } from "react-resizable";

const Dashboard = memo(() => {
    const [page, setPage] = useState([
        { id: 1, component: <PageOne /> },
        { id: 2, component: <PageTwo /> },
        { id: 3, component: <PageTheree /> },
        { id: 4, component: <PageFour /> },
    ]);

    const onDragOver = (event) => {
        setPage(event.newState)
    }

    const onNavigate = (event) => {
        setPage(event.newState)
    }

    const getBaseItemStyle = (isActive) => ({
        width: "100%",
        display: "inline-block",
        background: isActive ? '#ddd' : '',
        border: isActive ? 'none' : 'none',
        outline: "0"
    });

    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const SortableItemUI = (props) => {

        const { isDisabled, isActive, style, attributes, dataItem, forwardRef } = props;
        const classNames = [''];
        const [width, setWidth] = useState();
        const [widthSize, heightSize] = useWindowSize();

        useLayoutEffect(() => {
            const inner_width = document.getElementById("app-container").offsetWidth;
            if (inner_width >= 1024)
                setWidth((inner_width / 2) - 45);
            else
                setWidth(inner_width - 45);
        }, [width])

        if (isDisabled) {
            classNames.push('k-state-disabled');
        }

        useLayoutEffect(() => {
            if (typeof widthSize === "number") {
                const inner_width = document.getElementById("app-container").offsetWidth;
                if (inner_width >= 1024)
                    setWidth((inner_width / 2) - 45);
                else
                    setWidth(inner_width - 45);
            }
        }, [widthSize])

        return (
            <ResizableBox
                className="box"
                width={width}
                height={500}
            >
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
            </ResizableBox>
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