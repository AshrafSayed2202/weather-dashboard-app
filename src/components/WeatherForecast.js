import React, { Component } from 'react';

class WeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchForecastData(this.props.city);
    }

    componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            this.fetchForecastData(this.props.city);
        }
    }

    fetchForecastData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d5159581ba8282321c434efef269d6f2&units=metric`);
            const data = await response.json();
            if (data.cod === '200') {
                this.setState({ forecast: data.list, loading: false });
            } else {
                this.setState({ error: data.message, loading: false });
            }
        } catch (error) {
            this.setState({ error: 'Failed to fetch forecast data', loading: false });
        }
    };

    render() {
        const { forecast, loading, error } = this.state;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;

        return (
            <div className="weather-forecast">
                <h2>5-Day Forecast</h2>
                <div className="forecast-list">
                    {forecast.map((item, index) => (
                        <div key={index} className="forecast-item">
                            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                            <p>Temp: {item.main.temp}°C</p>
                            <p>{item.weather[0].description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default WeatherForecast;
