
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', function (table) {
      table.string('user_id');
      table.string('name');
      table.string('address');
      table.string('phone');
      table.string('email');
      table.date('birth');
      table.string('avatar');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
    return knex.dropTable('profile');
};
