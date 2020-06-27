const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);//habilita o uso do arquivo routes

// Temperatura
// Frequência Cardíaca
// Saturação de Oxigênio
// O código da estação
// O id do paciente
// Data e hora




app.listen(3000,()=>{
    console.log("Listing....");
});