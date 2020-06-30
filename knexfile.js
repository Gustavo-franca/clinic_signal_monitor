
const path = require('path');
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER} = require('./src/config/hostdatabase.json');


module.exports = {
    client: 'mysql',// banco utilizado -deve ser instalado o banco
    connection: {
        host : DB_HOST,
        user : DB_USER,
        password : DB_PASSWORD,
        database : DB_NAME,
        port:DB_PORT
     },
    migrations:{
        directory: path.resolve(__dirname,'src','database','migrations'), //onde será as migrations
    },
    seeds:{
        directory: path.resolve(__dirname,'src','database','seeds'), //onde será as migrations
    },
    useNullAsDefault : true, // no sqlite não aceita valores default com esse comando seta null como padrão

};