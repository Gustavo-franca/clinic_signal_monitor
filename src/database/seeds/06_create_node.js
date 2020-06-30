const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('node').insert([ 
        {
            network_name: "CASA",
            password : "12345678",
            active : 0,
            measurements_interval: 30,
           
        }, 
        {
            network_name: "setor 2",
            password : "12345678",
            active : 1,
            measurements_interval: 30,
        },
        {
            network_name: "setor 3",
            password : "12345678",
            active : 1,
            measurements_interval: 30,
        } 
    ]);

}