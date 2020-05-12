import React from 'react';
import './PotentialLocations.css';

const PotentialLocations = (props) => {
    const cityList = props.cityResults[0];
    return(
        <div className="results-container">
            {cityList && //Need to check if data is loaded in first !important
                cityList.map((hi, ind) => 
                    <div key={ind}>
                        {hi.formatted}
                    </div>
                )
            }
        </div>
    );
}

export default PotentialLocations;