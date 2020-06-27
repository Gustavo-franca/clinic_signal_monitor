const knex = require('knex');

exports.up =  async function up(knex){
 return knex.schema.createTable('patient_monitoring', table => {
    table.increments('id').primary();
    table.integer('id_patient').unsigned();
    table.integer('id_station').unsigned();
    table.decimal('temperature').notNullable();
    table.decimal('heart_rate').notNullable();
    table.decimal('oxygen_saturation').notNullable();
    table.integer('stationCode').unsigned().notNullable();
    table.timestamp('received_at').defaultTo(knex.fn.now());
    table.timestamp('created_at').notNullable();
    
    table.foreign('id_patient').references('patient.id');
    table.foreign('id_station').references('station.id');
 })
}
exports.down = async function down(knex){
    return  knex.schema.dropSchema('patient_monitoring');
}