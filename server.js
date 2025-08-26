const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");  

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

app.post("/api/users", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const sql = "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstName, lastName, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "User registered successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
