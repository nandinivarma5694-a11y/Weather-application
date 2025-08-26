import React from "react";

const About = () => {
  return (
    <div className="about" style={{ padding: "30px", lineHeight: "1.8", fontFamily: 'Times New Roman'}}>
      <h1>🌦 About Our Weather Application</h1>
      <p>
        The <b>Weather Application</b> is a modern, user-friendly, and reliable web-based tool
        designed to keep users updated with real-time and forecasted weather conditions across
        the world. Weather affects almost every aspect of our daily lives—from planning a trip,
        deciding what to wear, scheduling outdoor activities, or even preparing for emergencies. 
        With this application, users can access instant, accurate, and easy-to-understand weather
        details without the complexity of professional meteorological platforms.
      </p>

      <h2>🌍 Why Weather Matters?</h2>
      <p>
        Weather is one of the most important natural phenomena that influences human life.
        Farmers rely on weather forecasts for crop planning, travelers use it to prepare
        for journeys, and businesses depend on it to ensure smooth operations. Accurate
        forecasting can save lives during disasters like storms, floods, and extreme
        temperatures. Our application bridges the gap between complex weather data
        and everyday usability, making weather updates accessible to everyone.
      </p>

      <h2>✨ Key Features of the Application</h2>
      <ul>
        <li>
          🌍 <b>City Search:</b> Instantly search for any city worldwide and view live weather data.
        </li>
        <li>
          🌡 <b>Current Weather:</b> Displays temperature, humidity, wind speed, and weather condition icons.
        </li>
        <li>
          📅 <b>7-Day Forecast:</b> Helps users plan ahead by providing a complete weekly overview.
        </li>
        <li>
          🌅 <b>Sunrise & Sunset:</b> Daily timings for better planning of outdoor activities.
        </li>
        <li>
          💨 <b>Wind & Humidity:</b> Shows important environmental conditions that affect health and comfort.
        </li>
        <li>
          🎨 <b>Responsive Design:</b> Works seamlessly across desktop, tablet, and mobile devices.
        </li>
        <li>
          📊 <b>Graphical Data:</b> (optional add-on) Weekly temperature and weather trends visualized with charts.
        </li>
      </ul>

      <h2>🎯 Purpose of the Application</h2>
      <p>
        The main purpose of this app is to provide simple, fast, and visually clear weather 
        updates for people of all age groups. Unlike heavy weather portals filled with technical 
        jargon, this app focuses on <b>clarity, speed, and accuracy</b>. Whether you are a 
        student, traveler, or professional, our app helps you plan daily life with confidence.
      </p>

      <h2>💡 Benefits of Using This App</h2>
      <ul>
        <li>✔ Stay safe by preparing for extreme weather events in advance.</li>
        <li>✔ Save time with quick search and instant data updates.</li>
        <li>✔ Plan outdoor activities like cricket, jogging, or traveling efficiently.</li>
        <li>✔ Get accurate sunrise/sunset timings for religious, cultural, or fitness activities.</li>
        <li>✔ Accessible on-the-go from mobile devices anytime, anywhere.</li>
      </ul>

      <h2>⚠ Limitations</h2>
      <p>
        While the app is powerful and user-friendly, it still depends on third-party weather 
        APIs. In rare cases of poor internet connectivity or server downtime, data may not 
        load instantly. Forecasts are based on predictive models, which may occasionally 
        differ slightly from actual weather conditions.
      </p>

      <h2>🛠 Technologies Used</h2>
      <ul>
        <li><b>Frontend:</b> React.js, HTML5, CSS3</li>
        <li><b>API:</b> WeatherAPI (for real-time weather data)</li>
        <li><b>Styling:</b> Responsive CSS with modern UI design</li>
        <li><b>Optional Add-ons:</b> Chart.js / Recharts for weather visualization</li>
      </ul>

      <h2>📘 Help & Support</h2>
      <p>
        If you face any issues while using the Weather Application or want to learn more 
        about weather forecasts, you can visit our official help section:  
        👉 <a 
              href="https://www.weatherapi.com/docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "blue", fontWeight: "bold" }}
            >
            Weather API Help & Documentation
          </a>
      </p>
      <p>
        For general weather knowledge and safety tips, you can also check:  
        👉 <a 
              href="https://www.weather.gov/safety" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "blue", fontWeight: "bold" }}
            >
            NOAA Weather Safety Guide
          </a>
      </p>

      <h2>🚀 Future Enhancements</h2>
      <ul>
        <li>🔔 Weather alerts & notifications for storms or extreme conditions.</li>
        <li>📌 Save favorite cities for quick access.</li>
        <li>🌐 Multi-language support for global users.</li>
        <li>🗺 Integration with Google Maps for location-based forecasts.</li>
        <li>🎙 Voice-based search for hands-free usage.</li>
      </ul>

      <h2>📖 Conclusion</h2>
      <p>
        In today’s fast-moving world, <b>real-time weather updates</b> are more important than 
        ever. Our Weather Application ensures that you are always one step ahead of nature. 
        With accurate forecasts, responsive design, and user-friendly features, it is not just 
        an app—it is your <b>personal weather companion</b>.
      </p>

      <footer style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #ccc" }}>
        <p>🌦 Weather Application © 2025 | Designed with ❤️ using React.js</p>
      </footer>
    </div>
  );
};

export default About;
