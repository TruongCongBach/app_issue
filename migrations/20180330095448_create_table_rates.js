
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rates', function (table) {
      table.increments('id');
      table.string('user_id');
      table.string('comment');
      table.integer('point_vote');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rates');
};
