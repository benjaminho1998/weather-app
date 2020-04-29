import React from 'react';
import './Home.css';
import LocationInput from './LocationInput/LocationInput';
import PotentialLocations from './PotentialLocations/PotentialLocations';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            potentialLocations: false
        }
    }

    getInput = (val) => {
        this.setState({input: val});
    }

    getSubmit = () => {
        this.setState({potentialLocations: true});
    }

    render() {
        console.log(this.state.potentialLocations);
        return(
            <div className="home">
                <LocationInput input={this.state.input} getSubmit={this.getSubmit} getInput={this.getInput}/>
                {this.state.potentialLocations ? 
                    <PotentialLocations input={this.state.input} /> :
                    null
                }
            </div>
        );
    }
}

export default Home;