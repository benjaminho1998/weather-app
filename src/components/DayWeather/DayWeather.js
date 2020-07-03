import React from 'react';

const DayWeather = (props) => {
    const data = props.data;
    function capitalize(description) {
        const str = description.charAt(0).toUpperCase() + description.slice(1, description.length);
        return str;
    }

    function addFormat(dayOffset) {
        let newDate = new Date();
        let origin = props.originDay;
        newDate.setDate(origin.getDate() + dayOffset); 
        const dateStr = newDate.toUTCString();
        let arr = dateStr.split(" ");
        arr[0] = arr[0].slice(0, arr[0].length - 1);
        arr[4] = arr[4].slice(0, 5);
        if(arr[4].charAt(0) === '0') {
            arr[4] = arr[4].slice(1, arr[4].length);
        }
        return arr[0] + ", " + arr[2] + " " + arr[1];
    }

    return(
        <div className="forecast-container">
            <div className="left">
                <img className="icon left" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"></img>
            </div>
            <div className="info">
                <div className="bigger">{data.temp.day.toString().split(".")[0]}°F</div>
                <div className="big">{capitalize(data.weather[0].description)}</div>
                <div className="biggish">  Feels like: {data.feels_like.day.toString().split(".")[0]}°F</div>
            </div>
            {props.i === 0 ? 
                <span className="date">Tomorrow</span> :
                <span className="date">{addFormat(props.i)}</span>
            }
        </div>
    )
}

export default DayWeather;