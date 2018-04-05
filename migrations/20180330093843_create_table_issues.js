
exports.up = function(knex, Promise) {
  return knex.schema.createTable('issues', function (table) {
      table.increments('id');
      table.string('content');
      table.string('topic_id');
      table.string('user_id');
      table.string('rate_id');
      table.datetime('date_time');
      table.string('status');
      table.string('archived_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('issues');
};
