const express = require('express');
const routes = express.Router();
const siteController = require('../app/controllers/siteController');



routes.get('/', siteController.index);
routes.get('/login', siteController.login);
routes.get('/logout', siteController.logout);
routes.post('/login', siteController.login_post);
routes.post('/cookies',siteController.Cookies )




module.exports = routes;
