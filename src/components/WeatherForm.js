import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            onSubmit(city);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" required />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
