const express = require('express');
const routes = express.Router();
const attendanceController = require('../app/controllers/attendanceController');


routes.get('/attendance', attendanceController.attend)
routes.post('/attendence', attendanceController.addattendance)



module.exports = routes;