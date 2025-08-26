import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { date: "Day 1", rain: 60, sun: 40 },
  { date: "Day 2", rain: 20, sun: 80 },
  { date: "Day 3", rain: 50, sun: 50 },
  { date: "Day 4", rain: 70, sun: 30 },
  { date: "Day 5", rain: 30, sun: 70 },
  { date: "Day 6", rain: 10, sun: 90 },
  { date: "Day 7", rain: 40, sun: 60 }
];

export default function RainSunGraph() {
  return (
    <div style={{ padding: "40px", fontFamily: "TimesNewRoman",textAlign:"center"  }}>
      <h1>🌦 7-Day Weather Trend</h1>
      <p>
        Line chart showing <b>Rainfall Chance (%)</b> vs <b>Sunlight (%)</b> for 7 days
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />

          {/* Rainfall Line */}
          <Line
            type="monotone"
            dataKey="rain"
            stroke="#1e90ff"
            activeDot={{ r: 8 }}
            name="Rainfall Chance"
          />

          {/* Sunlight Line */}
          <Line
            type="monotone"
            dataKey="sun"
            stroke="#ffa500"
            name="Sunlight"
          />
        </LineChart>
      </ResponsiveContainer>
      <a href="/Home"><button style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ff7eb3",
              color: "white",
              textAlign:"center",
              fontWeight: "bold",
              transition: "0.3s",
      }}>Home</button></a>
    </div>
  );
}
