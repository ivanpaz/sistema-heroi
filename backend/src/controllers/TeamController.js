const connection = require('../database/connection');
const crypto = require('crypto');



module.exports = {
    async create(request, response) {
        const {name, capitan, image, score, password} = request.body;
        const id = crypto.randomBytes(5).toString('HEX');

        console.log(id, name, capitan, image, score, password);

        await connection('teams').insert({
            id, name, capitan, image, score, password ,
        })

        return response.json({id});
    },
    

    async list(request, response){
            const times = await connection('teams').select('*');
            return response.json(times);
    }
}