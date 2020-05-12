import React from 'react';
import './PotentialLocations.css';
import City from './City/City';

const PotentialLocations = (props) => {
    const cityList = props.cityResults[0];

    //Maps out the individual City components
    return(
        <div className="results-container">
            {cityList && //Need to check if data is loaded in first !important
                cityList.map((city, ind) => 
                    <City key={ind} cityName={city.formatted} lat={city.geometry.lat} lng={city.geometry.lng}/>
                )
            }
        </div>
    );
}

export default PotentialLocations;