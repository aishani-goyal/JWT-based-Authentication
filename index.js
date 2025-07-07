require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const usersRouter = require("./users");
const authRouter = require("./auth");
const authenticateToken = require("./middleware");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB connection error", err));

app.use("/api/users", usersRouter); 
app.use("/api/auth", authRouter); // login/register routes

// Protected route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Access granted to protected route",
    userId: req.user.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});