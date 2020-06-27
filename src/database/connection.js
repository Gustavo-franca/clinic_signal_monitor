const knex = require('knex'); //importar o knex
const path= require('path'); //path é utilizado para padronizar o uso de diretórios


const connection = knex({
    client: 'mysql',// banco utilizado -deve ser instalado o banco
    connection:{
        filename: path.resolve(__dirname,'database.sqlite'), //onde será armazenar o banco de dados
    },
    useNullAsDefault : true,
});

module.exports = connection; //exportar a conexão para uso externo