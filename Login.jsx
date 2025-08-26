import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <>
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
  
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Welcome To Weather App 🌦️</h1>
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          On sign up you will be subscribed to Pro Plus plan for free, no
          obligation 14 day trial. After trial has ended you will be
          automatically switched to Free plan.
        </p>

        

        <h2>Sign Up!</h2>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <label>Enter your name:</label>
          <input
            type="text"
            placeholder="Enter Your Name..."
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          /><br/>

          <label>Enter last name:</label>
          <input
            type="text"
            placeholder="Enter Last Name..."
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          /><br/>

          <label>Enter your email:</label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br/>

          <label>Enter password:</label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br/>

          <br />
          <a href="/home"><button
            type="submit"
            style={{
              marginTop: "15px",
              marginLeft: "160px",
              padding: "10px 25px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#388E3C")}
            onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
          >
            Save
          </button></a>
        </form>
              {/* Login Button */}
      <a href="/Sidelogin">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ff7eb3",
              color: "white",
              float:"right",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#ff4f81")}
            onMouseOut={(e) => (e.target.style.background = "#ff7eb3")}
          >
            Log in
          </button>
        </a>
        </div>
            </div>
        </>
  );
};

export default Login;
