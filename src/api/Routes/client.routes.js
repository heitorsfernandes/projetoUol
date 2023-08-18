const Router = require('express');
const clientController = require('../Controller/client.controller');

const route = Router();

route.get('/clients', clientController.getClients);

module.exports = route;
