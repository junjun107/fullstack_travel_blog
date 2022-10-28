const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const connectDB = require("../config/db");
const { errorHandler } = require("../middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

//connect to db
connectDB();

const app = express();

app.use(morgan("common"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
///middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to travel log homepage",
  });
});

// Routes
app.use("/api/logs", require("../routes/logsRoute"));

//error handling middleware
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
