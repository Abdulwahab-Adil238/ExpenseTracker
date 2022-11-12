const routes = require('express').Router();

// calling and distructuring the controllers
const Controller = require('../controllers/controller');
const {
     create_categories,
     get_categories,
     create_transaction,
     get_transaction,
     delete_Transaction,
     get_labels
} = Controller;

// routes for categroy
routes.route('/api/categories')
     .post(create_categories)
     .get(get_categories)

// routes for transactions
routes.route('/api/transaction')
     .post(create_transaction)
     .get(get_transaction)


routes.route('/api/transaction')
     .delete(delete_Transaction)

routes.route('/api/labels')
     .get(get_labels);

module.exports = routes;