import knex from '../database/connection';


export default class ClinicalSignalMeasurement {

    async create(request, response) {

        console.log(request.body);
        const reponseJson = {
            error: [],
            success: []
        };

        const {
            pacient_id,
            node_id,
            measurements
        } = request.body;

        const node = {
            id: node_id
        }
        const pacient = {
            id: pacient_id
        }
        const ArrayOfMeasurement = measurements.map((measurement) => ({
            value: measurement.measurement,
            type_id: measurement.measurement_type_id,
            type_name: measurement.measurement_type_name,
            date: measurement.measurement_date,
            timestamp: measurement.measurement_timestamp
        }));

        //identificar se o paciente existe


        //quardar os dados do paciente no banco de dados.
        try {
            const trx = await knex.transaction();
            //identificar se o nó existe e se está ativo.
            const selectednode = await trx('node').where(node).select('id', 'active').first();

            if (selectednode == null) {
                return response.json({ error: "node not registered." })
            } else if (selectednode.active == 0) {
                return response.json({ error: "node not active." })
            }
            //check if there is a pacient
            const selectedpacient = await trx('pacient').where(pacient).select('id', 'active').first();
            if (selectedpacient == null) {
                //insert id in database? to get the api information ? for now return errror.
                return response.json({ error: "pacient not registered." })
            } else if (selectedpacient.active == 0) {
                return response.json({ error: "pacient not active." })
            }


            //insert clinical mensuaraments in database
            // // select the mensuarament_type_id correct 
            const selectedMeasurement_type = await knex('measurement_type').select('measurement_type', 'id');
            const measurement_types = selectedMeasurement_type.map((m) => ({
                id: m.id,
                name: m.measurement_type
            }));

            /// preciso verificar se o id esta em measuremern_types
            const validedTypeMensurement = ArrayOfMeasurement.filter(
                (m) => measurement_types.filter(
                    (m_type) => m_type.id == m.type_id)
                    .length == 1);
            //error of type 
            const errorTypeMensurement = ArrayOfMeasurement.filter(
                (m) =>
                    measurement_types.filter(
                        (m_type) => m_type.id == m.type_id)
                        .length == 0);
            if (errorTypeMensurement.length != 0) {
                reponseJson.error.push({
                    name: "mensurement type don't exist",
                    values: errorTypeMensurement,
                })
            }
            // insert clinical_signals measurements in data_base
            const clinicalSignalsMeasurements = validedTypeMensurement.map((m) => ({
                measurement: m.value,
                date_time: m.date, //pode dar problema deve ser feita   //YYYY-MM-DD HH-MM-SS
                node_id: node.id,
                pacient_id: pacient.id,
                measurement_type_id: m.type_id
            }));
            const insetedids = await trx('clinical_signals_measurements').insert(clinicalSignalsMeasurements);


            //const deletedrows=  await trx('clinical_signals_measurements').truncate();
            // console.log(deletedrows);
            trx.commit();

            reponseJson.success.push({
                values: clinicalSignalsMeasurements
            });
            return response.json(reponseJson);

        } catch (error) {
            console.log(error)
            const reponseJson = { "OK": false };
            return response.json(reponseJson);
        }
    }
}