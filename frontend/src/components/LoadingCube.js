import React from 'react';
import '../css/loadingCube.css';


const LoadingCube = (props) => {
    return (
        <div className="sk-folding-cube" style={props.style}>
            <div className="sk-cube1 sk-cube"/>
            <div className="sk-cube2 sk-cube"/>
            <div className="sk-cube4 sk-cube"/>
            <div className="sk-cube3 sk-cube"/>
        </div>
    );
};

export default LoadingCube;