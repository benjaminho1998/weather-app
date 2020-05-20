import React from 'react';
import './WeatherDisplay.css';
import axios from 'axios';
import Current from './Current/Current';
import TopBar from './TopBar/TopBar';
import HourForecast from './HourForecast/HourForecast';
import DailyForecast from './DailyForecast/DailyForecast';

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: null,
            hourForecast: null,
            dailyForecast: null,
            date: null
        }
    }

    //Call the weather API and the time API because the weather API doesn't return the right timestamp
     async componentDidMount() {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lng}&units=imperial&exclude=minutely&appid=b8cedfac1134c2a5008ccbe84ebddbea`);
        const timezone = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=306JGSXY5XF2&format=json&by=position&lat=${this.props.lat}&lng=${this.props.lng}`);
        const dateArr = this.convertUnix(timezone.data.timestamp)
        console.log(weather);
        this.setState({
            current: weather.data.current,
            hourForecast: weather.data.hourly,
            dailyForecast: weather.data.daily,
            date: dateArr
        })
    }

    //Converts unix timestamp to date, and then parses the date string
    convertUnix(timestamp) {
        let date = new Date(timestamp*1000);
        date = date.toUTCString();
        let arr = date.split(" ");
        arr[0] = arr[0].slice(0, arr[0].length - 1);
        arr[4] = arr[4].slice(0, 5)
        if(arr[4].charAt(0) === '0') {
            arr[4] = arr[4].slice(1, arr[4].length);
        }
        return arr;
    }

    goHome = () => {
        this.props.goHome();
    }

    render() {
        const city = this.props.location.split(",")[0]
        return(
            <div className="weather-outer-container">
                <TopBar city={city}/>
                <Current date={this.state.date} data={this.state.current}/>
                <HourForecast data={this.state.hourForecast} />
                <DailyForecast data={this.state.dailyForecast} />
                <div className="button-holder"><button className="button" onClick={this.goHome}>Return</button></div>
            </div>
        );
    }
}

export default WeatherDisplay;