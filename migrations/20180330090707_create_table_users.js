
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
      table.increments('id');
      table.string('user');
      table.string('password');
      table.string('role');
      table.string('profile_id');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
