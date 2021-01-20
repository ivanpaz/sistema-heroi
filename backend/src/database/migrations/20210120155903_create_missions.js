
exports.up = function(knex) {
    return knex.schema.createTable('missions', function(table){
        table.increments();
        table.boolean('done').notNullable();
        table.string('feedback');
        table.string('anex');
        table.string('title');
        table.integer('numMouth').notNullable();
        table.integer('numMission').notNullable();
        
        table.string('team_id').notNullable();
        table.foreign('team_id').references('id').inTable('teams');
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('missions');
};
