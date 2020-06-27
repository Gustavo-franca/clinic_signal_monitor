const express = require('express');

const knex = require('./database/connection');

import PatientController from './controller/patientController';

const routes = express.Router();
const patientController = new PatientController();



routes.post('/save-data',patientController.create);

routes.get('/',(request, response)=>{
    response.send('Server Rodando');
})

module.exports = routes;