import React from 'react';

class WeatherDisplay extends React.Component {
    render() {
        return(
            <div>
                {this.props.location}
                {this.props.lat}
                {this.props.lng}
            </div>
        );
    }
}

export default WeatherDisplay;