import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    goHome = () => {
        this.props.goHome();
    }

    render() {
        return(
            <div className="top">
                <button className="button button-holder" onClick={this.goHome}>Return</button>
                <div className="gradient-text city-display">{this.props.city}</div>
            </div>
        );
    }
}

export default TopBar;