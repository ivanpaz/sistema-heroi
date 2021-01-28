
exports.up = function(knex) {
  return knex.schema.createTable('teams', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('capitan').notNullable();
      table.string('image').notNullable();
      table.integer('score').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};
