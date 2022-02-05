const knex = require('../config/minecraft');

const findAll = async () => {
  let players;
  try {
    players = await knex
      .select('name')
      .from('player');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  return players;
};

module.exports = {
  findAll,
};
