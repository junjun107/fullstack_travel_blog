const express = require("express");
const router = express.Router();
const {
  getLogs,
  getSingleLog,
  addLog,
  deleteLog,
} = require("../controller/logController");

const requireAuth = require("../middleware/requireAuth");

// require auth for all log routes
router.use(requireAuth);

router.get("/", getLogs);
router.get("/:id", getSingleLog);
router.post("/", addLog);

router.delete("/:id", deleteLog);

module.exports = router;
