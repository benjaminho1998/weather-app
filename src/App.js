import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHome: true,
      location: '',
      lat: '',
      lng: ''
    }
  }

  getLocation = (name, lat, lng) => {
    this.setState({
      showHome: false,
      location: name,
      lat: lat,
      lng: lng
    })
  }

  goHome = () => {
    this.setState({showHome: true});
  }

  render() {
    return (
      <div className="App container">
        {this.state.showHome ? <Home passLocationBack={this.getLocation} chosenLocation={this.state.location}/> : 
        <WeatherDisplay goHome={this.goHome} location={this.state.location} lat={this.state.lat} lng={this.state.lng}/>}
      </div>
    );
  }
}

export default App;
