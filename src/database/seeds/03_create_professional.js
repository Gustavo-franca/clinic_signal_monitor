const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('professional').insert([
    {
        id: 1,
        name :"Pedro", 
        email :"Pedro@email.com", 
        password :"securitypassword", 
        contact: "48 9 9999-9999",
        administrator: 1,
        department_id: 1,
        occupation_id: 1,
    },  
    ]);

}