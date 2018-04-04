
exports.up = function(knex, Promise) {
  return knex.schema.createTable('news', function (table) {
      table.string('issue_id');
      table.string('user_id');
      table.string('delete_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('news');
};
