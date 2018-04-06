
exports.up = function(knex, Promise) {
  return knex.schema.table('issues', function (table) {
      table.dropColumn('rate_id');
      table.integer('point_rate');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('issues', function (table) {
        table.dropColumn('point_rate');
        table.integer('rate_id');
    })
};

