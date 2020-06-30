const express = require('express');

const knex = require('./database/connection');

import ClinicalSignalMeasurement from './controller/ClinicalSignalMeasurementController';

const routes = express.Router();
const clinicalSignalMeasurement = new ClinicalSignalMeasurement();



routes.post('/save-data',clinicalSignalMeasurement.create);

routes.get('/',(request, response)=>{
    response.send('Server Rodando');
})

module.exports = routes;