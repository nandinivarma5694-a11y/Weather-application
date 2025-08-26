const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: "nandini@123", 
  database: "weather_app", 
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
  } else {
    console.log("✅ MySQL Connected...");
  }
});

module.exports = db;
