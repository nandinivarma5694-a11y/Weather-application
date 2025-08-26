import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const API_KEY = "b154d9e7153e47b5b3983600251608"; 

const WeatherCalendar = () => {
  const [date, setDate] = useState(null);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const fetchWeather = async () => {
    if (!city) return alert("Enter city name");

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setError("");
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setShowCalendar(false); 
  };

  const selectedDateStr = date ? date.toISOString().split("T")[0] : null;

  const selectedForecast =
    weather?.forecast?.forecastday.find(f => f.date === selectedDateStr);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textAlign: "center",
      backgroundColor: "rgba(235, 247, 243, 1)"
    }}>
      <h1 style={{ color: "#000000ff" }}>🌤 Weather Calendar</h1>

      <div style={{ margin: "20px 0" }}>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#1e90ff",
            color: "white",
            cursor: "pointer"
          }}
        >
          {date ? `Selected Date: ${selectedDateStr}` : "Select Date"}
        </button>

        {showCalendar && (
          <div style={{ marginTop: "10px" }}>
            <Calendar
              onChange={handleDateSelect}
              value={date || new Date()}
            />
          </div>
        )}
      </div>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={e => setCity(e.target.value)}
        style={{
          padding: "8px",
          width: "60%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px"
        }}
      />
      <br />
      <button
        onClick={fetchWeather}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#32cd32",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Get Weather
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedForecast && weather && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <h3>{weather.location.name}, {weather.location.country}</h3>
          <p>Date: {selectedForecast.date}</p>
          <p>🌡 Avg Temp: {selectedForecast.day.avgtemp_c} °C</p>
          <p>☁ Condition: {selectedForecast.day.condition.text}</p>
          <img src={selectedForecast.day.condition.icon} alt="weather icon" />
          <p>🌧 Chance of Rain: {selectedForecast.day.daily_chance_of_rain}%</p>
          <p>💨 Max Wind: {selectedForecast.day.maxwind_kph} kph</p>
        </div>
      )}

      {!selectedForecast && date && weather && (
        <p style={{ marginTop: "20px", color: "#555" }}>No data for this date</p>
      )}
    </div>
  );
};

export default WeatherCalendar;
