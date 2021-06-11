const express = require('express');
const routes = express.Router();
const classController = require('../app/controllers/classController');

routes.get('/class', classController.class);
routes.get('/class/editclass/:id', classController.editclass);
routes.post('/class', classController.addclass);
routes.post('/class/updateclass/:id', classController.updateclass);
routes.post('/class/deleteclass/:id', classController.deleteclass);




module.exports = routes;