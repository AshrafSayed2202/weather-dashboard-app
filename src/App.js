import React, { Component, Suspense, lazy } from 'react';
import WeatherForm from './components/WeatherForm';
import './index.css';

const CurrentWeather = lazy(() => import('./components/CurrentWeather'));
const WeatherForecast = lazy(() => import('./components/WeatherForecast'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  handleCitySubmit = (city) => {
    this.setState({ city });
  };

  render() {
    const { city } = this.state;

    return (
      <div className="App">
        <h1>Weather Dashboard</h1>
        <WeatherForm onSubmit={this.handleCitySubmit} />
        <Suspense fallback={<p>Loading...</p>}>
          {city && <CurrentWeather city={city} />}
          {city && <WeatherForecast city={city} />}
        </Suspense>
      </div>
    );
  }
}

export default App;
