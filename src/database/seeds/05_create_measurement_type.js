const knex = require('knex');
const { prependOnceListener } = require('../connection');

exports.seed =  async function seed(knex){
    await knex('measurement_type').insert([ 
        {
            id: 1,
            measurement_type: "Temperatura"
           
        }, 
        {
            id: 2,
            measurement_type: "Frequência Cardíaca"
           
        },
        
        {
            id: 3,
            measurement_type: "Saturação de Oxigênio"
           
        },
    ]);

}