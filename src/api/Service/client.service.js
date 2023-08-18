const clientModel = require('../Model/client.model');

const getClients = async () => {
  const clientList = await clientModel.getClients();

  // if (!sellerList) throw new Error('Server internal error');

  return { type: null, message: clientList };
};

module.exports = { getClients };
