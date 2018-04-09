
exports.up = function(knex, Promise) {
    return knex.schema.table('topics',function (table) {
        table.increments('id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('topics',function (table) {
        table.dropColumn('id');
    })
};
