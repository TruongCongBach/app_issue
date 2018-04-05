
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
      table.integer('user_id');
      table.string('fullName');
      table.string('address');
      table.string('phone');
      table.string('email');
      table.date('dateOfBirth');
      table.string('avatar');
      table.datetime('delete_at');
  })
};

exports.down = function(knex, Promise) {
    return knex.dropTable('profiles');
};
