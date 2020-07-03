import React from 'react';
import './Forecast.css';
import DayWeather from '../DayWeather/DayWeather';

class Current extends React.Component {

    //Capitalizes first letter of first word of the description
    capitalize(description) {
        return description.charAt(0).toUpperCase() + description.slice(1, description.length);
    }
    
    render() {
        const daily = this.props.daily;
        const current = this.props.current;
        const originDay = this.props.originDate;
        return(
            <div className="cont">   
                {current && 
                    <div className="filler">
                        <div className="forecast-container">
                            <div className="left">
                                <img className="icon left" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="weather icon"></img>
                            </div>
                            <div className="info">
                                <div className="bigger">{current.temp.toString().split(".")[0]}°F</div>
                                <div className="big">{this.capitalize(current.weather[0].description)}</div>
                                <div className="biggish">  Feels like: {current.feels_like.toString().split(".")[0]}°F</div>
                            </div>
                            <div className="date">
                                Today
                            </div>
                        </div>  
                        <div className="filler">
                            {daily.map((futureDay, i) =>                                     
                                <DayWeather originDay={originDay} i={i} data={futureDay} key={futureDay.dt}/>
                            )}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Current;