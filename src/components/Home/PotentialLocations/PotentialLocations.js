import React from 'react';
import './PotentialLocations.css';
import City from './City/City';

class PotentialLocations extends React.Component {

    passLocationBack = (name, lat, lng) => {
        this.props.passLocationBack(name, lat, lng);
    }

    //Maps out the individual City components
    render() {
        const cityList = this.props.cityResults[0];
        return(
            <div className="results-container">
                {cityList && //Need to check if data is loaded in first !important
                    cityList.map((city, ind) => 
                        <City key={ind} passLocationBack={this.passLocationBack} cityName={city.formatted} lat={city.geometry.lat} lng={city.geometry.lng}/>
                    )
                }
            </div>
        );
    }
}

export default PotentialLocations;