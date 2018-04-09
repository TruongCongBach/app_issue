
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('rates');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('rates', (table) =>{
      table.increments('id');
      table.string('user_id');
      table.string('comment');
      table.integer('point_vote');
      table.datetime('delete_at');
  })
};
