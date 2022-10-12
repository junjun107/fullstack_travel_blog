const getLogs = async (req, res) => {
  try {
    res.status(200).json({
      message: 'get all',
    });
  } catch (err) {
    console.error(err);
  }
};

const addLog = async (req, res) => {
  try {
    res.status(200).json({
      message: 'add a new log',
    });
  } catch (err) {
    console.error(err);
  }
};
const updateLog = async (req, res) => {
  try {
    res.status(200).json({
      message: 'update a log',
    });
  } catch (err) {
    console.error(err);
  }
};
const deleteLog = async (req, res) => {
  try {
    res.status(200).json({
      message: 'remove a log',
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getLogs,
  addLog,
  updateLog,
  deleteLog,
};
