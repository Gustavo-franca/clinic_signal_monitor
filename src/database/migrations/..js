const knex = require('knex');

exports.up =  async function up(knex){
 return knex.schema.createTable('', table => {

 })
}
exports.down = async function down(knex){
    return  knex.schema.dropSchema('');
}