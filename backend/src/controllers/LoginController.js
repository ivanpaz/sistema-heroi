const connection = require('../database/connection');
const crypto = require('crypto');
const { listenerCount } = require('../database/connection');

module.exports = {

    async login(request, response){
        console.log("Tentar logar");
        const {name,password} = request.body;
        const time = await connection('teams').select('*').where('name',name ).where('password', password);
        
        if(time[0] != undefined){
            return response.json(time);
        }else{ 
            console.log("Senha ou usuario incorreto");
            return response.status(400).json({error: 'Login incorrento'});
        }
    },

    
}
