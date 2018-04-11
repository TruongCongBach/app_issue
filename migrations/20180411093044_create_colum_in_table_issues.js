
exports.up = function(knex, Promise) {
  return knex.schema.table('issues', function (table) {
      table.string('news');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('issues', function (table) {
      table.dropColumn('news');
  })
};
