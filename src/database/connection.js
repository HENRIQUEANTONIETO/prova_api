var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '78453116',
      database : 'db_pessoas'
    }
  });

module.exports = knex