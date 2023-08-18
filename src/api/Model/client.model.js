const connection = require('../../database/Connection');

const getClients = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Store.clients',
  );
  // console.log(products);
  return products;
};

module.exports = { getClients };
