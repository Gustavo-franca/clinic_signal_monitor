const express = require('express');
const routes = require('./routes');

import {errors} from 'celebrate';

const app = express();
app.use(express.json());
app.use(errors()) // lida com os erros encontrados com o celebrate 
app.use(routes);//habilita o uso do arquivo routes

// Temperatura
// Frequência Cardíaca
// Saturação de Oxigênio
// O código da estação
// O id do paciente
// Data e hora




app.listen(3333,()=>{
    console.log("Listing....");
});