const routes = require('express').Router();


// calling and distructuring the controllers
const Controller = require('../controllers/controller');
const { get_categories } = Controller;

// routes
routes.route('/api/best/').get(get_categories);

module.exports = routes;