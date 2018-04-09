
exports.up = function(knex, Promise) {
  return knex.schema.table('issues',function (table) {
      table.integer('topic_id', 10);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('issues',function (table) {
        table.dropColumn('topic_id');
    })
};
