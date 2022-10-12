const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); //create a new error msg with express error handler
  res.status(404); //setting 404 status code
  next(error); //next forwards the actual error to error handling middleware
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🎅' : error.stack, //only show stack in dev
  });
};

module.exports = {
  notFound,
  errorHandler,
};
