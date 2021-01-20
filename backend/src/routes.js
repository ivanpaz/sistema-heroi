const express = require('express');

const routes = express.Router();

routes.get('/users/:id', (request, response) => {

    const params = request.params;
    console.log(params);
    return response.json({
        evento: 'teste Ivan',
        dev: 'ivan'
    });
});


routes.post('/users/add/', (request, response) => {

    const body = request.body;
    console.log(body?.name);
    return response.json({
        AddUser: 'Ivan',
        dev: 'ivan'
    });
});

module.exports = routes;