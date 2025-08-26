import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Indore"," Ujjain", "Jaipur", "Dewas"];

  const fetchWeather = async (selectedCity = city) => {
    if (!selectedCity) return;
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=b154d9e7153e47b5b3983600251608&q=${selectedCity}&days=7&aqi=yes&alerts=yes`
      );
      const data = await response.json();
      setWeather(data);
      setSelectedDay(data.forecast.forecastday[0]);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // 📌 Auto Location Detection Feature
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          try {
            const response = await fetch(
              `http://api.weatherapi.com/v1/forecast.json?key=b154d9e7153e47b5b3983600251608&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`
            );
            const data = await response.json();
            setCity(data.location.name);
            setWeather(data);
            setSelectedDay(data.forecast.forecastday[0]);
          } catch (error) {
            console.error("Error fetching location weather:", error);
          }
        },
        (error) => {
          alert("Location access denied. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <div style={{ width: "200px", background: "#282c34", color: "white", padding: "20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Cities</h2>
        {cities.map((c) => (
          <div key={c} onClick={() => {setCity(c); fetchWeather(c);}}
            style={{margin: "10px 0", cursor: "pointer", padding: "8px", borderRadius: "5px", 
            background: city === c ? "#61dafb" : "transparent", color: city === c ? "black" : "white",}}
          >
            {c}
          </div>
        ))}
      </div>
    
      <div style={{ flex: 1, padding: "30px", textAlign: "center" }}>
       <a href="/Logout"> <button style={{background:"red",float:"right",color:"white"}} className="logout1">Logout</button></a>
        
        <input type="text" placeholder="Enter city name..." value={city} onChange={(e) => setCity(e.target.value)} style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={() => fetchWeather(city)} style={{ marginLeft: "10px", padding: "10px 20px", fontSize: "16px" }} >Get Weather</button>

        {/* 📌 New Auto Location Button */}
        <button onClick={detectLocation} style={{ marginLeft: "10px", padding: "10px 20px", fontSize: "16px", background: "#4caf50", color: "white" }}>
          Detect My Location
        </button>
       
        {weather && weather.location && (
          <div style={{ marginTop: "20px" }}>
            <h2> {weather.location.name}, {weather.location.country}</h2>
            <p>🌡 Current Temp: {weather.current.temp_c} °C</p>
            <p>☁ {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
            <h3 style={{ marginTop: "30px" }}>📅 7-Day Calendar</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "10px", marginTop: "15px",}}>
              
              {weather.forecast.forecastday.map((day) => (
                <div key={day.date} onClick={() => setSelectedDay(day)}
                  style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", cursor: "pointer", background: selectedDay?.date === day.date ? "#61dafb" : "#f9f9f9",}}>
                  <p><b>{day.date}</b></p>
                  <img src={day.day.condition.icon} alt="icon" />
                  <p>{day.day.avgtemp_c}°C</p>
                </div>
              ))}
            </div>

            {selectedDay && (
              <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "#f1f1f1",}}>
                <h3>📌 Weather on {selectedDay.date}</h3>
                <img src={selectedDay.day.condition.icon} alt="icon" />
                <p>{selectedDay.day.condition.text}</p>
                <p>🌡 Avg Temp: {selectedDay.day.avgtemp_c}°C</p>
                <p>🌡 High: {selectedDay.day.maxtemp_c}°C | Low: {selectedDay.day.mintemp_c}°C</p>
                <p>💧 Humidity: {selectedDay.day.avghumidity}%</p>
                <p>☀ Sunrise: {selectedDay.astro.sunrise}</p>
                <p>🌙 Sunset: {selectedDay.astro.sunset}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
