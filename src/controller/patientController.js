import knex from '../database/connection';


export default class PatientController{

    async create(request, response){
        
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

    const result = await knex('').select()
    console.log(result)


//    //Primeiro verificar se o código da estação é válido
//    try{
//         const trx = await knex.transaction();

//         var ids_station =  await trx('station').where(station).select('id');
//         if(ids_station[0] == null || ids_station[0] != id_station){
//             console.log('estação não cadastrada!');
//             return response.json({error: "station not registered."})
//         }

//      //verificar se existi um paciente com este id
//      var ids_patient =  await trx('patient').where(patient).select('id');
//      if(ids_patient[0] == null  ){
//          console.log('cadastrar novo paciente');
//          // cadastar novo usuário

//          //buscar da api dados do usuário se houver
//      }else if(ids_patient[0] != patient.id){
//         console.log('algo esta errado');
//         return;

//      }
//      console.log('salvar dados da medição');

//      return
//         //caso existir proseguir

//         //caso não inserir esse novo id no banco

    
//     //inserir os dados com o id como chave estrangeira na tabela /patient-data/
//             //inserir a hora da inserção tbm


//     // retornar confirmação ou erro.


//    }catch(error){
//       console.log(error)
//    }



 


   
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
    }
}