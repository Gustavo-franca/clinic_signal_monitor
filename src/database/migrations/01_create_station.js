const knex = require('knex');

exports.up =  async function up(knex){
 return knex.schema.createTable('station', table => {
     table.integer('id').primary();
     table.string('location');

 })
}
exports.down = async function down(knex){
    return  knex.schema.dropSchema('station');
}