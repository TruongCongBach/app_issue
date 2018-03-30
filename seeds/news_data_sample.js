
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
          {issue_id:1, topic_id:1, delete_at:null},
          {issue_id:2, topic_id:2, delete_at:null},
          {issue_id:3, topic_id:3, delete_at:null},
          {issue_id:4, topic_id:4, delete_at:null}
      ]);
    });
};
