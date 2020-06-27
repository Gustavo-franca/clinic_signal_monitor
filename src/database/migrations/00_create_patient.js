const knex = require('knex');

exports.up =  async function up(knex){
 return knex.schema.createTable('patient', table => {
     table.integer('id').primary().unsigned().notNullable();
     table.string('name');
 })
}
exports.down = async function down(knex){
    return  knex.schema.dropSchema('patient');
}