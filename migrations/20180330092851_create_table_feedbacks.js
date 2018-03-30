
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feedbacks', function (table) {
      table.increments('id');
      table.string('issue_id');
      table.string('user_id');
      table.string('content');
      table.datetime('date_time');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('feedbacks');
};
