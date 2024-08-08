# Weather Dashboard

This is a Weather Dashboard application built with React. It fetches and displays weather data for different locations. Users can input a city name to get the current weather conditions and a 5-day forecast.

## How to start

-   ### `npm i` or `npm install`
    -   to install all the required dependencies
    -   use `npm start` to run the project on localhost via your browser

## Features

-   **Weather Display Component:**

    -   Displays current weather conditions (temperature, humidity, description).
    -   Fetches weather data from an API when the component mounts using lifecycle methods.

-   **Weather Forecast Component:**

    -   Displays a 5-day weather forecast.
    -   Renders forecast items dynamically using the map function.

-   **Form Handling:**

    -   Form to input a city name and fetch weather data for that city.
    -   Validates user input to ensure a valid city name is entered.

-   **Lazy Loading and Optimization:**
    -   Uses React’s lazy and Suspense to lazy load components for better performance.
    -   Implements lazy loading for images to optimize the application.
