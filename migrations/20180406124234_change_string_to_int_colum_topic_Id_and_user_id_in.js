
exports.up = function(knex, Promise) {
      return knex.schema.table('issues', function (table) {
        table.dropColumn('topic_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('issues',function (table) {
        table.string('topic_id');
    })
};
