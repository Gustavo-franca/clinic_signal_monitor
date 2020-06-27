const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('station').insert([ 
        {
            id: 1,
            location : "Hospital x"
        }, 
        {
            id: 2,
        } 
    ]);

}