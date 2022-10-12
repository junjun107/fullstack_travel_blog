const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const connectDB = require('../config/db');
const middleware = require('../middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

//connect to a locally hosted database with mongoose.connect()
//mongoose.connect(process.env.DB_URL);

app.use(morgan('common'));
//app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'homepage',
  });
});

// to use routes
app.use('/api/logs', require('../routes/logsRoute'));

// not found error msg middleware
app.use(middleware.notFound);

//error handling middleware
app.use(middleware.errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
