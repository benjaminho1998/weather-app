import React from 'react';
import './Home.css';
import LocationInput from './LocationInput/LocationInput';
import PotentialLocations from './PotentialLocations/PotentialLocations';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    getInput = (val) => {
        this.setState({input: val});
    }

    render() {
        return(
            <div className="home">
                <LocationInput input={this.state.input} getInput={this.getInput}/>
                <PotentialLocations input={this.state.input} />
            </div>
        );
    }
}

export default Home;