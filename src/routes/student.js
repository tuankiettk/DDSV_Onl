const express = require('express');
const routes = express.Router();
const studentController = require('../app/controllers/studentController');

routes.get('/student', studentController.student);
routes.get('/student/editstudent/:id', studentController.editstudent);
routes.post('/student', studentController.addstudent);
routes.post('/student/updatestudent/:id', studentController.updatestudent);
routes.post('/student/deletestudent/:id', studentController.deletestudent);


module.exports = routes;