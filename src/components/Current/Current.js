import React from 'react';
import './Current.css';

class Current extends React.Component {

    //Capitalizes first letter of first word of the description
    capitalize(description) {
        const str = description.charAt(0).toUpperCase() + description.slice(1, description.length);
        return str;
    }
    
    render() {
        let data = this.props.data;
        return(
            <div>   
                {data && 
                    <div className="current-container">
                        <div className="left">
                            <img className="icon left" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"></img>
                        </div>
                        <div className="middle">
                            <div className="bigger">{data.temp.toString().split(".")[0]}°F</div>
                            <div className="big">{this.capitalize(data.weather[0].description)}</div>
                            <div className="biggish">  Feels like: {data.feels_like.toString().split(".")[0]}°F</div>
                        </div>
                        <div className="right">
                            <div>Humidity: {data.humidity}%</div>
                            <div>Wind speed: {data.wind_speed} mph</div>
                            <div>Humidity: {data.humidity}%</div>
                            <div>UV Index: {data.uvi}</div>
                        </div>
                    </div>  
                }
            </div>
        );
    }
}

export default Current;