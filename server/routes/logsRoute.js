const express = require('express');
const router = express.Router();
const {
  getLogs,
  addLog,
  updateLog,
  deleteLog,
} = require('../controller/logController');

router.get('/', getLogs);

router.post('/', addLog);

router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;
