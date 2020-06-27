const express = require('express');

const knex = require('./database/connection');

const routes = express.Router();

routes.post('/save-data', async function (request,response){
    
    
    const{
        id_patient,
        temperature,
        heartRate,
        oxygenSaturation,
        id_station,
        timestamp,
     } = request.body;
     console.log(request.body);
  const station = {
      id : id_station
  }
  const patientMonitoring = {
      id_patient,
      id_station,
      temperature,
      heartRate,
      oxygenSaturation,
      timestamp,
  }
  const patient = {
      id : id_patient
  }
   //Primeiro verificar se o código da estação é válido
   try{
        trx = await knex.transaction();

        var ids_station =  await trx('station').where(station).select('id');
        if(ids_station[0] == null || ids_station[0] != id_station){
            console.log('estação não cadastrada!');
            return response.json({error: "station not registered."})
        }
Z

     //verificar se existi um paciente com este id
     var ids_patient =  await trx('station').where(patient).select('id');
     if(ids_patient[0] == null  ){
         console.log('cadastrar novo paciente');
         // cadastar novo usuário

         //buscar da api dados do usuário se houver
     }else if(ids_patient[0] != patient.id){

     }

        //caso existir proseguir

        //caso não inserir esse novo id no banco

    
    //inserir os dados com o id como chave estrangeira na tabela /patient-data/
            //inserir a hora da inserção tbm


    // retornar confirmação ou erro.

        trx.commit();
        console.log(result);


   }catch(error){
       throw new Error('')
   }



 


   
    //  const patient = {
    //     idPatient,
    //     temperature,
    //     heartRate,
    //     oxygenSaturation,
    //     stationCode,
    //     Timestamp,
    //  }

    //  const trx = await knex.transaction(); //cria uma transação
    //  try{
    //      console.log(trx)
    //     const ids =  await trx('patient').insert(patient);
        
    //     await trx.commit();

    //     const newPatient = {
    //         id:ids[0],
    //         ... patient,
    //       }
    //     return response.json(newPatient);

    //  }catch(e){
    //     await trx.rollback();
    //     console.log(e);
    //     throw new Error('Falha ao gravar Dados')
    //  }
     return;
});

routes.get('/',(request, response)=>{
    response.send('Server Rodando');
})

module.exports = routes;