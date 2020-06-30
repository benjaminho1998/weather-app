import React from 'react';
import './City.css';

class City extends React.Component {
    
    handleClick = (name, lat, lng) => {
        this.props.passLocationBack(name, lat, lng)
    }

    render() {
        return(
            <div onClick={() => this.handleClick(this.props.cityName, this.props.lat, this.props.lng)} className="city">
                {this.props.cityName}
            </div>
        );
    }
}

export default City;