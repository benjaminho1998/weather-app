import React from 'react';
import './City.css';

class City extends React.Component {
    
    handleClick = () => {
        //pass chosen location all the way up to App component
    }

    render() {
        return(
            <div onClick={this.handleClick} className="city">
                {this.props.cityName}
            </div>
        );
    }
}

export default City;