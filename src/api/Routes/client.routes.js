const Router = require('express');
const clientController = require('../Controller/client.controller');

const route = Router();

route.get('/clients', clientController.getClients);
route.post('/clients', clientController.newClient);

module.exports = route;
