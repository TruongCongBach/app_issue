
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics',function (table) {
      table.increments('id');
      table.string('content');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics');
};
