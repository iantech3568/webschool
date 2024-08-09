const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

router.post('/record', async (req, res) => {
  const { studentId, date, status } = req.body;
  const attendance = new Attendance({ studentId, date, status });
  await attendance.save();
  res.send('Attendance recorded');
});

router.get('/:studentId', async (req, res) => {
  const attendance = await Attendance.find({ studentId: req.params.studentId });
  res.send(attendance);
});

module.exports = router;
