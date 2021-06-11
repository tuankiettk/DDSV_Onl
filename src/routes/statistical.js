const express = require('express');
const routes = express.Router();
const statisticalController = require('../app/controllers/statisticalController');


routes.get('/statistical', statisticalController.statistical)
routes.post('/statistical/search', statisticalController.search)





module.exports = routes;