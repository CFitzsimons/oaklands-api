// Database setup
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.MINECRAFT_DB_HOST,
    port: process.env.MINECRAFT_DB_PORT,
    user: process.env.MINECRAFT_DB_USERNAME,
    password: process.env.MINECRAFT_DB_PASSWORD,
    database: process.env.MINECRAFT_DB_NAME,
  },
});

module.exports = knex;
