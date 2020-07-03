import React from 'react';
import './WeatherDisplay.css';
import axios from 'axios';
import Forecast from '../Forecast/Forecast';
import TopBar from '../TopBar/TopBar';

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: null,
            dailyForecast: null,
            timezone: null
        }

        this.originDate = null;
    }

    //Call the weather API and the time API because the weather API doesn't return the right timestamp
     async componentDidMount() {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lng}&units=imperial&exclude=minutely&appid=b8cedfac1134c2a5008ccbe84ebddbea`);
        const timezone = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=306JGSXY5XF2&format=json&by=position&lat=${this.props.lat}&lng=${this.props.lng}`);
        this.originDate = new Date(timezone.data.timestamp*1000);
        this.setState({
            current: weather.data.current,
            dailyForecast: weather.data.daily
        })
    }

    goHome = () => {
        this.props.goHome();
    }

    render() {
        const city = this.props.location.split(",")[0];
        return(
            <div className="weather-outer-container">
                <TopBar city={city} goHome={this.goHome}/>
                <Forecast originDate={this.originDate} current={this.state.current} daily={this.state.dailyForecast}/>
            </div>
        );
    }
}

//TODO: pass unconverted date into DayWeather and increment a day each and display that date AND fix positioning of cityname

export default WeatherDisplay;