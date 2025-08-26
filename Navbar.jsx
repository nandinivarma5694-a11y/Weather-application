import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {    
  return (
    <>
      {/* Heading */}
      <h1 style={{
        textAlign: "center",
        marginBottom: "20px",
        marginTop: "5px",
        padding: "10px",
        fontSize: "28px",
        fontWeight: "bold",
        color: "white",
        background: "linear-gradient(90deg, #4facfe, #00f2fe)",  // nice blue gradient
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}>
        🌦 Weather App
      </h1>

      {/* Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "12px",
        background: "rgba(0, 0, 0, 0.6)",  // transparent black so background image dikhe
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        
        {/* Links */}
        <Link to="/Home" style={linkStyle}>Home</Link>
        <Link to="/About" style={linkStyle}>About</Link>
        <Link to="/Calander" style={linkStyle}>Calendar</Link>
        <Link to="/RainSunGraph" style={linkStyle}>Graph</Link>

        {/* Right-side welcome text */}
        <p style={{
          marginLeft: "auto",
          fontSize: "22px",
          color: "#ffeb3b",  // bright yellow for contrast
          fontWeight: "bold",
          fontStyle: "italic"
        }}>
          Welcome To Weather 🌦️
        </p>
      </nav>
    </>
  )
}

// Reusable Link style
const linkStyle = {
  listStyle: "none",
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "8px 15px",
  borderRadius: "6px",
  transition: "0.3s",
};

// Add hover effect dynamically
linkStyle[":hover"] = {
  background: "#61dafb",
  color: "black"
};

export default Navbar
