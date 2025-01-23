import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherViewer = () => {
  const [city, setCity] = useState(""); // City name input
  const [weatherData, setWeatherData] = useState(null); // Weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  const API_KEY = "9401f2f6044bda8a5cd173f136550236"; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    const cachedData = localStorage.getItem("weatherData");
    if (cachedData) {
      setWeatherData(JSON.parse(cachedData));
    }
  }, []);

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      localStorage.setItem("weatherData", JSON.stringify(response.data));
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Weather Viewer</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Search
        </button>
      </div>

      {loading && <p style={styles.loading}>Loading...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {weatherData && (
        <div style={styles.weatherContainer}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>

          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "70%",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  weatherContainer: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  loading: {
    fontSize: "18px",
    color: "#007BFF",
  },
  error: {
    fontSize: "18px",
    color: "red",
  },
};

export default WeatherViewer;
