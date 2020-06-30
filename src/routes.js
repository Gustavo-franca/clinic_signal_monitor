const express = require('express');

import ClinicalSignalMeasurement from './controller/ClinicalSignalMeasurementController';

import {celebrate,Joi} from 'celebrate';

const routes = express.Router();

const clinicalSignalMeasurement = new ClinicalSignalMeasurement();



routes.post('/save-data',celebrate({
    body : Joi.object().keys({
        pacient_id : Joi.number().required(),
        node_id : Joi.number().required(),
        measurements : Joi.array().items(
            Joi.object().keys({

            measurement: Joi.number().required(),
            measurement_type_id : Joi.number().required(),
            measurement_type_name : Joi.string(),
            measurement_date :Joi.date().less('now').required(),
            measurement_timestamp :Joi.number()

        }).required())
    },{
        abortEarly: false,
    }) 
}),clinicalSignalMeasurement.create);

routes.get('/',(request, response)=>{
    response.send('Server Rodando');
})

module.exports = routes;