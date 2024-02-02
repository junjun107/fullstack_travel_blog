// handle errors in Express async await request
const asyncHandler = require("express-async-handler");
const LogEntry = require("../models/logModel");
const mongoose = require("mongoose");
const getIdFromToken = require("../utils");

//GET all logs
const getLogs = asyncHandler(async (req, res) => {
  const logs = await LogEntry.find().sort({ createdAt: -1 }); // get all,sorts by creation date in descending order.
  res.status(200).json(logs);
});

//GET a single Log
const getSingleLog = async (req, res) => {
  const { id } = req.params;

  // check provided ID is a valid MongoDB Object ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid mongoDB ID " });
  }

  const singleLog = await LogEntry.findById(id);
  //if id not found in db
  if (!singleLog) {
    return res.status(404).json({ error: "LogEntry Not Found in Database" });
  }
  res.status(200).json(singleLog);
};

//POST a new Log
const addLog = async (req, res) => {
  //Extracts user ID from the authorization token to associate the log entry with a user.
  const user_id = getIdFromToken(req.headers.authorization);

  try {
    const data = {
      ...req.body,
      user_id,
    };

    const entryLog = await LogEntry.create(data);
    res.status(200).json(entryLog);
  } catch (error) {
    console.log({ error });
    res.status(400).json({ error: error.message });
  }
};

// DELETE a Log
const deleteLog = async (req, res) => {
  const { id } = req.params;

  //mongodb id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid mongoDB ID" });
  }

  const deletedLog = await LogEntry.findOneAndDelete({ _id: id });
  //if id not found in db
  if (!deletedLog) {
    return res.status(404).json({ error: "LogEntry Not Found in Database" });
  }
  res.status(200).json(LogEntry);
};

module.exports = {
  getLogs,
  getSingleLog,
  addLog,
  deleteLog,
};
