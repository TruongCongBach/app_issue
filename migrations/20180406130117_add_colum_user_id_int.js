
exports.up = function(knex, Promise) {
    return knex.schema.table('issues',function (table) {
        table.integer('user_id', 10);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('issues',function (table) {
        table.dropColumn('user_id');
    })
};
