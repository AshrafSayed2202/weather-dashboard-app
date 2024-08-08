import React, { Component } from 'react';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchWeatherData(this.props.city);
    }

    componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            this.fetchWeatherData(this.props.city);
        }
    }

    fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5159581ba8282321c434efef269d6f2&units=metric`);
            const data = await response.json();
            if (data.cod === 200) {
                this.setState({ weather: data, loading: false });
            } else {
                this.setState({ error: data.message, loading: false });
            }
        } catch (error) {
            this.setState({ error: 'Failed to fetch weather data', loading: false });
        }
    };

    render() {
        const { weather, loading, error } = this.state;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;

        return (
            <div className="current-weather">
                <h2>Current Weather in {weather.name}</h2>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Description: {weather.weather[0].description}</p>
            </div>
        );
    }
}

export default CurrentWeather;
