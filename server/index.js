const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

const getUsers = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "users.json"));
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(
    path.resolve(__dirname, "users.json"),
    JSON.stringify(users, null, 2)
  );
};

// Registration endpoint
app.post("/register", (req, res) => {
  const users = getUsers();
  const { email } = req.body;

  if (users.find((user) => user.email === email)) {
    return res.status(400).send("User already exists");
  }

  users.push(req.body);
  saveUsers(users);
  res.status(201).send("User registered");
});

// Login endpoint
app.post("/login", (req, res) => {
  const users = getUsers();
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send("Invalid login credentials");
  }
});

// Endpoint to get user details (optional)
app.get("/profile/:email", (req, res) => {
  const users = getUsers();
  const user = users.find((u) => u.email === req.params.email);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
