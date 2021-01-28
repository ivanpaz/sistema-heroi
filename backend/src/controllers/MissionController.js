const connection = require('../database/connection');
const crypto = require('crypto');
const { list } = require('./TeamController');
const { select } = require('../database/connection');

module.exports = {

    async create(request,response){
        const {done, feedback, anex, title, numMouth, numMission} = request.body;
        const team_id = request.headers.authorization;

        console.log(team_id);

        const [id] = result = await connection("missions").insert({
            done, 
            feedback, 
            anex, 
            title, 
            numMouth, 
            numMission,
            team_id
        });

        return response.json({id, done})
        
    },


    async list(request, response){
        const team_id = request.headers.authorization;
        const missions = await connection('missions').select('*').where('team_id', team_id);
        return response.json(missions);
    },

    async listMouth(request, response){
        const {numMouth} = request.params;
        console.log("Mes", numMouth);
        const team_id = request.headers.authorization;
        const missions = await connection('missions').select('*').where('team_id', team_id).where('numMouth',numMouth);
        return response.json(missions);
    },


    async delete(request, response){
        const {id} = request.params;
        console.log(id, "deletar");

        const team_id = request.headers.authorization;

        console.log("deletar do " + team_id );

        const mission = await connection('missions').select('team_id', 'feedback').where('id', id);
        console.log(mission);

        if(mission[0]?.team_id){
            if(mission[0]?.team_id != team_id){
                console.log("Não autorizado");
                return response.status(401).json({error: "Não permitido"});
            }
            await connection('missions').where('id', id).delete();
            return response.status(204).send();
        }else{
            return response.status(400).json({error: "Id não encontrado"});
        }
        

    }
}