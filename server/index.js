const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const path = require("path");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(morgan("common"));
app.use(cors());

///middlewares
app.use(express.json());

//Serving Frontend
app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to mapmayway travel log backend",
  });
});
app.use("/api/logs", require("./routes/logsRoute"));
app.use("/api/users", require("./routes/usersRoute"));

//error handling middleware
app.use(errorHandler);

// MongoDB connects before listening to PORT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
});
