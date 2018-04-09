
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rates', (table)=>{
      table.increments('id');
      table.integer('issue_id');
      table.integer('user_id');
      table.integer('rate');

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rates');
};
