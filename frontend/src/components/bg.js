import React from 'react';
import '../css/bg.css';

const bg = (props) => {
    return (
            <div className={"bg-image " + props.otherClasses}></div>);
};

export default bg;
