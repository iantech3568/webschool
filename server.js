const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const attendanceRoutes = require('./routes/attendance');
const messagesRoutes = require('./routes/messages');
const studentsRoutes = require('./routes/students');
const assessmentsRoutes = require('./routes/assessments');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/auth', authRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/messages', messagesRoutes);
app.use('/students', studentsRoutes);
app.use('/assessments', assessmentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
