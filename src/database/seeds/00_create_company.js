


const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('company').insert([ 
        {
            id:1,
            company_name:"compania de Testes",
            address: "endereço",
            address_number:999,
            address_complement: "complemento",
            postal_code:"99999-999",
            neighborhood_id:1,
            city_id:1,
            state_id:22,
            country_id:1,
        },
    ]);

}