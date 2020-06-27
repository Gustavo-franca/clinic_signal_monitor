const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('patient').insert([
    {
        id: 1,
        name : "Pedro"
    }, 
    {
      id: 2,
    } 
    ]);

}