const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('pacient').insert([
    {
        id: 1,
        name :"Pedro", 
        email :"Pedro@email.com", 
        password :"securitypassword", 
        data_nasc :"12/31/2000", 
        age :18, 
        contact :"48 9 9999-9999", 
        address :"Rua tal", 
        address_number :45, 
        address_complement :"Casa, proximo a tal", 
        postal_code :"88798-000", 
        monitoring_start :"02/26/2020", 
        accompanying_person :"Sandro", 
        accompanying_contact :"48 9 9999-9999", 
        active :1, 
        professional_id : 1, 
        neighborhood_id : 1, 
        city_id :1, 
        state_id :22, 
        country_id :1, 
    },  
    ]);

}