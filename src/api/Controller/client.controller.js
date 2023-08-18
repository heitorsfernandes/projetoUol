const clientService = require('../Service/client.service');

const getClients = async (_req, res) => {
  const { message } = await clientService.getClients();
  return res.status(200).json(message);
};

module.exports = {
  getClients,
};
