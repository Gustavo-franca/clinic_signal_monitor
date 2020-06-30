const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('occupation').insert([ 
        {
            id:1,
            occupation_name:"Médico",
        }
    ]);

}