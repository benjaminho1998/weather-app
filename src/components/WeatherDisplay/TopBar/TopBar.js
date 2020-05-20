import React from 'react';
import './TopBar.css';

const TopBar = (props) => {
    return(
        <div className="top">
            {props.city}
        </div>
    );
}

export default TopBar;