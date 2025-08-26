import React, { useState } from "react";
import "./sidelogin.css";  // 👈 CSS file add karenge background ke liye

const Sidelogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <>
      <div className="sidelogin-container">
        <h1 className="h1">Welcome To Weather App 🌦️</h1>
        <p className="h1">
          On sign up you will be subscribed to Pro Plus plan for free, no obligation 14 day trial. 
          After trial has ended you will be automatically switched to Free plan.
        </p>

        <div className="fullContent">
          <label className="kkk">Enter your email:</label>
          <input 
            type="email" 
            placeholder="Enter Your email..." 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          /><br />

          <label className="kkk">Enter password :</label>
          <input 
            type="password" 
            placeholder="Enter Your password..." 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          /><br /><br />

          <a className="chetna" href="/Home">
            <button type="submit">Save</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidelogin;
