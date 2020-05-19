import React from 'react';
import './WeatherDisplay.css';
import axios from 'axios';

class WeatherDisplay extends React.Component {

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lng}&units=imperial&exclude=minutely,daily&appid=b8cedfac1134c2a5008ccbe84ebddbea`)
        .then(res => {
            console.log(res);
            //figure out how to convert unix to local time
        })
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