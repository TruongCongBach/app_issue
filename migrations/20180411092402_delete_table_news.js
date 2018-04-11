
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('news');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable("news");
};
