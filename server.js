const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const users = [
  {
    LastName: "Dela Cruz",
    FirstName: "Juan",
    Email: "juan@example.com",
    Password: "123456"
  },
  {
    LastName: "Santos",
    FirstName: "Maria",
    Email: "maria@example.com",
    Password: "password123"
  },
  {
    LastName: "Garcia",
    FirstName: "Pedro",
    Email: "pedro@example.com",
    Password: "qwerty123"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "User API is running",
    endpoint: "/users"
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});