import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHome: true,
      location: ''
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.showHome ? <Home chosenLocation={this.state.location}/> : <WeatherDisplay chosenLocation={this.state.location}/>}
      </div>
    );
  }
}

export default App;
