const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('department').insert([
    {
        
        id:1,
        department_name:"departamento Teste",
        department_contact: "Sandro",
        department_phone_number:"48 9 9999-9999",
        company_id: 1,
    },  
    ]);

}