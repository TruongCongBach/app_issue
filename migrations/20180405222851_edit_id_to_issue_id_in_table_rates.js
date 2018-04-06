
exports.up = function(knex, Promise) {
    return knex.schema.table('rates', function (table) {
        table.dropColumn('id');
        table.integer('issue_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('rates', function (table) {
        table.dropColumn('issue_id');
        table.integer('id');
    })
};
