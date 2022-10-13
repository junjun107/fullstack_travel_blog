const Log = require("../models/logModel");
const mongoose = require("mongoose");

//GET all logs
const getLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (err) {
    console.error(err);
  }
};

//GET a single log
const getSingleLog = async (req, res) => {
  const { id } = req.params;

  //mongodb id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Log Not Found" });
  }
  const singleLog = await Log.findById(id);
  //if id not found in db
  if (!singleLog) {
    return res.status(404).json({ error: "Log Not Found" });
  }
  res.status(200).json(singleLog);
};

//POST a new log
const addLog = async (req, res) => {
  //console.log(req.body);
  try {
    const userInput = req.body;

    const entryLog = await Log.create(userInput);
    res.status(200).json(entryLog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE a log
const updateLog = async (req, res) => {
  const { id } = req.params;

  //check id in mongodb
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Log Not Found" });
  }
  //update it
  const log = await Log.findOneAndUpdate({ _id: id }, { ...req.body });
  //if id not found in db
  if (!log) {
    return res.status(404).json({ error: "Log Not Found" });
  }
  res.status(200).json(log);
};

// DELETE a log
const deleteLog = async (req, res) => {
  const { id } = req.params;

  //mongodb id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Log Not Found" });
  }

  const log = await Log.findOneAndDelete({ _id: id });
  //if id not found in db
  if (!log) {
    return res.status(404).json({ error: "Log Not Found" });
  }
  res.status(200).json(log);
};

module.exports = {
  getLogs,
  getSingleLog,
  addLog,
  updateLog,
  deleteLog,
};
