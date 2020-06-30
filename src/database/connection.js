const knex = require('knex');
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER} = require('../config/hostdatabase.json');

const connection = knex({
    client: 'mysql',// banco utilizado -deve ser instalado o banco
    connection: {
        host : DB_HOST,
        user : DB_USER,
        password : DB_PASSWORD,
        database : DB_NAME,
        port:DB_PORT
  },
    useNullAsDefault : true,
});

module.exports = connection; //exportar a conexão para uso externo