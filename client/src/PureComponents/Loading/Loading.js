import React from 'react';
import loadingGif from '../../Images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className = "loading">
            <h4>Employees data loading ....</h4>
            <img src = {loadingGif} alt = "loading" />
        </div>
    )
}

export default Loading;
