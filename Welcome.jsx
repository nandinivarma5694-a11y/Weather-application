import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "TimesNewRoman",
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "50px",
            color: "white",
            marginBottom: "20px",
          }}
        >
          🌦️ Welcome To Weather App
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "20px",
            color: "#f1f1f1",
            marginBottom: "40px",
          }}
        >
          Get real-time forecasts, alerts & insights at your fingertips
        </p>
        <a href="/Login">
          <button
            style={{
              padding: "12px 30px",
              fontSize: "18px",
              borderRadius: "25px",
              background: "#ff7eb3",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#ff4f81")}
            onMouseOut={(e) => (e.target.style.background = "#ff7eb3")}
          >
             Go to Login
          </button>
        </a>
      </div>
    </div>
  );
}
