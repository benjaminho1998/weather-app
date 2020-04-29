import React from 'react';
import './LocationInput.css';

class LocationInput extends React.Component {
    constructor(props) {
        super(props);

        this.passInputBack = this.passInputBack.bind(this);
    }

    passInputBack(e) {
        this.props.getInput(e.target.value);
    }

    passSubmitBack = () => {
        this.props.getSubmit()
    }
    
    //TODO: work on using React Place Autocomplete and Google Places Api to create OR figure out PotentialLocations rendering issue and use other API

    render() {
        return(
            <form className="form" onSubmit={this.passSubmitBack}>
                <input onChange={this.passInputBack} value={this.props.input} className="input" placeholder="Enter City"></input>
            </form>
        );
    }
}

export default LocationInput;