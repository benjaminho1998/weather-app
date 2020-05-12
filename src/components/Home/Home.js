import React from 'react';
import './Home.css';
import LocationInput from './LocationInput/LocationInput';
import PotentialLocations from './PotentialLocations/PotentialLocations';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            cityResults: [],
            err: ''
        };
    }

    getInput = (val) => { //Callback to pass into LocationInput to raise up input state
        this.setState({
            input: val,
        }); 
    }

     getSubmit = (event) => { //Callback to pass into LocationInput to know when form is submitted and to call location API
        event.preventDefault();
        this.setState({cityResults:[]});
        this.getLocations(this.state.input);
    }

    getLocations = (cityName) => {
        axios.get('https://api.opencagedata.com/geocode/v1/json?key=afa61660305d42dfa33fa203a74aceab&q=' + cityName)
        .then(res => {
            if(res.data.total_results !== 0) {
                this.setState({
                    cityResults: this.state.cityResults.concat([res.data.results])
                });
            }
            if(res.status === 200 && res.data.total_results === 0) { //If the query does not exist
                this.setState({
                    error: 'No location found, please try another city.',
                    cityResults: []
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="home">
                <LocationInput input={this.state.input} getSubmit={this.getSubmit} getInput={this.getInput} error={this.state.err}/>
                <PotentialLocations cityResults={this.state.cityResults} />
            </div>
        );
    }
}

export default Home;