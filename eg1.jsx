import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b154d9e7153e47b5b3983600251608&q=${city}&aqi=yes`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌦 Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name (Delhi, Mumbai...)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={fetchWeather}
        style={{ marginLeft: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        Get Weather
      </button>

      {weather && weather.location && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>🌡 Temperature: {weather.current.temp_c} °C</p>
          <p>☁ Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>💨 Wind: {weather.current.wind_kph} kph</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}
