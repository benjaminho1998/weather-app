import React from 'react';
import './WeatherDisplay.css';

class WeatherDisplay extends React.Component {

    componentDidMount() {
        //Call OpenWeather API here
    }

    render() {
        return(
            <div className="weather-outer-container">
                {this.props.location}
                {this.props.lat}
                {this.props.lng}
            </div>
        );
    }
}

export default WeatherDisplay;