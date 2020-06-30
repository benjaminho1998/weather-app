import React from 'react';
import './LocationInput.css';

class LocationInput extends React.Component {
    constructor(props) {
        super(props);

        this.passInputBack = this.passInputBack.bind(this);
        this.passSubmitBack = this.passSubmitBack.bind(this);
    }

    passInputBack(e) {
        this.props.getInput(e.target.value);
    }

    passSubmitBack(e) {
        this.props.getSubmit(e);
    }

    render() {
        return(
            <form className="form" onSubmit={this.passSubmitBack}>
                <input onChange={this.passInputBack} value={this.props.input} className="input" placeholder="Enter City"></input> <br></br>
                {this.props.error}
            </form>
        );
    }
}

export default LocationInput;