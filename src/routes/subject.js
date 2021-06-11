const express = require('express');
const routes = express.Router();
const subjectController = require('../app/controllers/subjectController');

routes.get('/subject', subjectController.subject);
routes.get('/subject/editsubject/:id', subjectController.editsubject);
routes.post('/subject', subjectController.addsubject);
routes.post('/subject/updatesubject/:id', subjectController.updatesubject);
routes.post('/subject/deletesubject/:id', subjectController.deletesubject);



module.exports = routes;