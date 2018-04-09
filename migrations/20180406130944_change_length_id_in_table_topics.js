
exports.up = function(knex, Promise) {
    return knex.schema.table('topics',function (table) {
        table.dropColumn('id');
        //table.integer('id').unsigned().notNullable();
        })
    };

exports.down = function(knex, Promise) {
    return knex.schema.table('topics',function (table) {
        table.integer('id');
        //table.integer('id').unsigned().notNullable();
    })
};
